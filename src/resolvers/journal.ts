import {
  Arg,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { LessThan, Like, MoreThan } from "typeorm";
import { Issue } from "../entities/Issue";
import { Journal } from "../entities/Journal";
import { canEdit } from "../middleware/canEdit";
import { isLogedin } from "../middleware/isLogedin";
import { JournalInputs } from "../types/journal/JournalInputs";
import { JournalResponse } from "../types/journal/JournalResponse";
import { isCN, isISSN } from "../utils/validators";
import { verifyJournalInput } from "../utils/verifyJournalInputs";

@Resolver(() => Journal)
export class JournalResolver {
  // Field resolvers
  @FieldResolver(() => Journal)
  async issues(@Root() journal: Journal): Promise<Issue[]> {
    const res = await Journal.findOne(journal.id, { relations: ["issues"] });
    return res?.issues || [];
  }

  @Query(() => [Journal])
  catalogs(
    @Arg("cursor", () => Int, { defaultValue: 0 }) cursor: number = 0,
    @Arg("limit", () => Int, { defaultValue: 20 }) limit: number = 20
  ): Promise<Journal[]> {
    return Journal.find({
      order: { id: "DESC" },
      where: { id: cursor ? LessThan(cursor) : MoreThan(cursor) },
      take: limit,
    });
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
  async deleteJournal(@Arg("id", () => Int) id: number): Promise<Boolean> {
    await Journal.delete(id);
    return true;
  }

  @Query(() => [Journal])
  async searchJournal(
    @Arg("searchText") searchText: string,
    @Arg("cursor", () => Int, { defaultValue: 0 }) cursor: number,
    @Arg("limit", () => Int, { defaultValue: 10 }) limit: number
  ): Promise<Journal[]> {
    searchText = searchText.trim();
    if (isISSN(searchText)) {
      return Journal.find({
        where: {
          issn: searchText,
          id: cursor ? LessThan(cursor) : MoreThan(cursor),
        },
        order: { id: "DESC" },
        take: limit,
      });
    }
    if (isCN(searchText)) {
      return Journal.find({
        where: {
          cn: searchText,
          id: cursor ? LessThan(cursor) : MoreThan(cursor),
        },
        order: { id: "DESC" },
        take: limit,
      });
    }
    if (searchText) {
      return Journal.find({
        where: {
          title: Like(`%${searchText}%`),
          id: cursor ? LessThan(cursor) : MoreThan(cursor),
        },
        order: { id: "DESC" },
        take: limit,
      });
    }

    return [];
  }
}
