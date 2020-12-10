import {
  Arg,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware
} from "type-graphql";
import { Issue } from "../entities/Issue";
import { Journal } from "../entities/Journal";
import { canEdit } from "../middleware/canEdit";
import { isLogedin } from "../middleware/isLogedin";
import { JournalInputs } from "../types/JournalInputs";
import { JournalResponse } from "../types/JournalResponse";
import { verifyJournalInput } from "../utils/verifyJournalInputs";

@Resolver(() => Journal)
export class JournalResolver {
  // Field resolvers
  @FieldResolver(() => Journal)
  async issues(
    @Root() journal: Journal
  ): Promise<Issue[]> {
    const res = await Journal.findOne(journal.id, {relations:["issues"]});
    return res?.issues || [];
  }

  @Query(() => [Journal])
  catalogs(): Promise<Journal[]> {
    return Journal.find({order: {updatedAt: "DESC"}});
  }

  @Query(() => Journal, { nullable: true })
  async journal(
    @Arg("id", () => Int) id: number,
    @Arg("detail", () => Boolean, { nullable: true }) detail: boolean
  ): Promise<Journal | undefined> {
    const query = Journal.createQueryBuilder("journal").where(
      "journal.id = :journalId"
    );

    if (detail) query.leftJoinAndSelect("journal.issues", "issue");
    return query.setParameters({ journalId: id }).getOne();
  }

  @Mutation(() => JournalResponse)
  @UseMiddleware([isLogedin, canEdit])
  async createJournal(
    @Arg("inputs") inputs: JournalInputs
  ): Promise<JournalResponse> {
    const errors = await verifyJournalInput(inputs);
    if (errors.length > 0) return { errors };
    const jouranl = await Journal.create(inputs).save();
    return { journal: jouranl };
  }

  @Mutation(() => JournalResponse)
  @UseMiddleware()
  async updateJournal(
    @Arg("id", () => Int) id: number,
    @Arg("inputs") inputs: JournalInputs
  ): Promise<JournalResponse> {
    const journal = await Journal.findOne(id);
    if (!journal) {
      return {
        errors: [
          {
            field: "general",
            message: "This shouldn't happend",
          },
        ],
      };
    }
    const errors = await verifyJournalInput(inputs, id);
    if (errors.length > 0) return { errors };
    journal.title = inputs.title || journal.title;
    journal.issn = inputs.issn || journal.issn;
    journal.cn = inputs.cn || journal.cn;
    journal.period = inputs.period || journal.period;
    journal.pub_place = inputs.pub_place || journal.pub_place;
    journal.organizer = inputs.organizer || journal.organizer;
    journal.yfdh = inputs.yfdh || journal.yfdh;
    await Journal.save(journal);
    return { journal };
  }

  @Mutation(() => Boolean)
  async deleteJournal(@Arg("id", ()=>Int) id: number): Promise<Boolean> {
    await Journal.delete(id);
    return true;
  }
}
