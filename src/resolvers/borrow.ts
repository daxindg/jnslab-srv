import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { getManager, In, LessThan, MoreThan, Not } from "typeorm";
import { Borrow } from "../entities/Borrow";
import { Issue } from "../entities/Issue";
import { User } from "../entities/User";
import { canEdit } from "../middleware/canEdit";
import { isLogedin } from "../middleware/isLogedin";
import { MyContext } from "../types/MyContext";
import { BorrowState} from "../utils/borrowStates";

@Resolver(() => Borrow)
export class BorrowResolver {
  @FieldResolver(() => User)
  user(@Root() borrow: Borrow) {
    return User.findOne(borrow.userId);
  }
  @FieldResolver(() => Issue)
  issue(@Root() borrow: Borrow) {
    return Issue.findOne(borrow.issueId);
  }

  @Mutation(() => Borrow, {nullable: true})
  @UseMiddleware([isLogedin])
  async borrow(
    @Arg("id", () => Int) id: number,
    @Ctx() {req}: MyContext
  ):Promise<Borrow | null> {
    const userId = req.session.userId;
    if (!userId) return null;
    const issueId = id;
    const borrow = new Borrow();
    borrow.userId = userId;
    borrow.issueId = issueId;
    borrow.state = BorrowState.PENDING_BORROW;
    borrow.borrowAt = new Date();
    borrow.expireAt = new Date(Date.now() + 1000 * 60 * 30);
    return await borrow.save();
  }

  @Mutation(() => Borrow, {nullable: true})
  async return (
    @Arg('id', ()=> Int) id: number,
    @Ctx() {req}: MyContext
  ): Promise<Borrow | null> {
    const borrow = await Borrow.findOne(id);
    if (!borrow) throw Error('该借阅记录不存在');

    if (borrow.userId !== req.session.userId) return null;
    if (borrow.state === BorrowState.PENDING_BORROW) {
      const res =  await borrow.remove();
      res.id = id;
      return res;
    }
    if (borrow.state === BorrowState.NORMAL || borrow.state ===  BorrowState.OVERTIME) {
      borrow.state = BorrowState.PENDING_RETURN;
      return await borrow.save();
    }
    return null;
  }

  @Mutation(() => Borrow, {nullable: true})
  @UseMiddleware([canEdit])
  async accept(
    @Arg('id', () => Int) id: number,
  )  {
    await this.update();
    const borrow = await Borrow.findOne(id);
    if (!borrow) throw Error('该借阅记录不存在');
    if (borrow.state === BorrowState.PENDING_BORROW) {
      return await getManager().transaction(async ts => {
        const issue = await Issue.findOne(borrow.issueId);
        const user = await User.findOne(borrow.userId);
        // TODO: check user state
        if (!issue || !user || issue.rem < 1) return null;

        issue.rem = issue.rem - 1;
        borrow.state = BorrowState.NORMAL;
        borrow.borrowAt = new Date();
        borrow.expireAt = new Date(Date.now() + 1000* 60 * 60 * 24 * 7);
        await ts.save(issue);
        return await ts.save(borrow);
      });
    }
    else if (borrow.state === BorrowState.PENDING_RETURN) {
      return await getManager().transaction(async ts => {
        const issue = await Issue.findOne(borrow.issueId);
        const user = await User.findOne(borrow.userId);
        // TODO: check user state
        if (!issue || !user) return null;

        issue.rem = issue.rem + 1;
        if (Date.now() > borrow.expireAt.getTime()) {
          borrow.state = BorrowState.OVERTIME_RETURNED;
        }
        else borrow.state = BorrowState.RETURNED;
        borrow.returnAt = new Date();
        await ts.save(issue);
        return await ts.save(borrow);
      });
    }
    return null;
  }
  @Mutation(() => Borrow, {nullable: true})
  @UseMiddleware([canEdit])
  async reject(
    @Arg('id', () => Int) id: number,
  )  {
    await this.update();
    const borrow = await Borrow.findOne(id);
    if (!borrow) throw Error('该借阅记录不存在');
    if (borrow.state === BorrowState.PENDING_BORROW) {
      await Borrow.delete(id);
      borrow.id = id;
      return borrow;
    }
    else if (borrow.state === BorrowState.PENDING_RETURN) {
      if (borrow.expireAt.getTime() <  Date.now()) borrow.state = BorrowState.OVERTIME;
      else borrow.state = BorrowState.NORMAL;
      return await borrow.save();
    }
    else return null;
  }


  async update() {
    await Borrow.delete({state: BorrowState.PENDING_BORROW, expireAt: LessThan(new Date())});
    await Borrow.update({state: BorrowState.NORMAL, expireAt: LessThan(new Date())}, {state: BorrowState.OVERTIME});
  }

  @Query(()=> [Borrow])
  @UseMiddleware([isLogedin])
  async getBorrows(
    @Arg("isReturned", () => Boolean) isReturned: boolean,
    @Arg('cursor', () => Int, {defaultValue: 0}) cursor: number = 0,
    @Arg('limit', () => Int, {defaultValue: 10}) limit: number = 10,
    @Ctx() {req}: MyContext
  ):Promise<Borrow[]>  {
    const userId = req.session.userId; 
    await this.update();
    const stat = [BorrowState.RETURNED, BorrowState.OVERTIME_RETURNED];
    return Borrow.find(
      {
        where: {userId, state:isReturned ? In(stat) : Not(In(stat)), id: cursor ? LessThan(cursor) : MoreThan(cursor)},
        order: {id: "DESC"},
        take: limit
      }
    )
  }

  @Query(()=> [Borrow])
  @UseMiddleware([isLogedin, canEdit])
  async getPendings(
    @Arg('cursor', () => Int, {defaultValue: 0}) cursor: number = 0,
    @Arg('limit', () => Int, {defaultValue: 10}) limit: number = 10,
    @Ctx() {req}: MyContext
  ):Promise<Borrow[]>  {
    const userId = req.session.userId; 
    await this.update();
    const stat = [BorrowState.PENDING_BORROW, BorrowState.PENDING_RETURN];
    return Borrow.find(
      {
        where: {userId, state:In(stat), id: cursor ? LessThan(cursor) : MoreThan(cursor)},
        order: {id: "DESC"},
        take: limit
      }
    )
  }


}