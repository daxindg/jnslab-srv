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
import { Article } from "../entities/Article";
import { Issue } from "../entities/Issue";
import { Journal } from "../entities/Journal";
import { canEdit } from "../middleware/canEdit";
import { isLogedin } from "../middleware/isLogedin";
import { IssueInputs } from "../types/IssueInputs";
import { IssueResponse } from "../types/IssueResponse";
import { verifyIssueInput } from "../utils/verifyIssueInput";

@Resolver(() => Issue)
export class IssueResolver {
  // Field resolvers
  @FieldResolver(() => [Article])
  articles(@Root() issue: Issue) {
    return Article.find({where: {issueId: issue.id}});
  }

  @FieldResolver(() => Journal)
  async journal(
    @Root() issue: Issue 
  ): Promise<Journal | undefined> {
    
    const res = await Issue.findOne(issue.id, {relations: ["journal"]});
    return res?.journal;
  }

  @Query(() => [Issue])
  issueCatalog(): Promise<Issue[]> {
    return Issue.find();
  }

  @Query(() => Issue, { nullable: true })
  async issue(
    @Arg("id", () => Int) id: number,
    @Arg("detail", () => Boolean, { nullable: true }) detail: boolean
  ): Promise<Issue | undefined> {
    if (detail)detail;
    return await Issue.findOne(id) ;
  }

  @Mutation(() => IssueResponse)
  @UseMiddleware([isLogedin, canEdit])
  async createIssue(
    @Arg("journalId", ()=> Int) journalId: number,
    @Arg("inputs") inputs: IssueInputs
  ): Promise<IssueResponse> {
    const errors = await verifyIssueInput(inputs, journalId);
    if (errors.length > 0) return { errors };

    const journal = await Journal.findOne({where: {id: journalId}});
    if (!journal) {
      throw Error("Invalid journal id")
    }
    const issue = new Issue()
    issue.year = inputs.year;
    issue.vol = inputs.vol;
    issue.no= inputs.no;
    issue.total = inputs.total
    issue.rem = inputs.rem || inputs.total
    issue.journal = journal;

    await Issue.save(issue);
    return { issue };
  }


  @Mutation(() => IssueResponse)
  @UseMiddleware([canEdit])
  async updateIssue(
    @Arg("id", () => Int) id: number,
    @Arg("inputs") inputs: IssueInputs
  ): Promise<IssueResponse> {
    const issue = await Issue.findOne(id);
    if (!issue) {
      return {
        errors: [
          {
            field: "general",
            message: "This shouldn't happend",
          },
        ],
      };
    }
    const errors = await verifyIssueInput(inputs,issue.journalId, id);
    if (errors.length > 0) return { errors };
    console.log(inputs);
    issue.year = inputs.year || issue.year;
    issue.vol = inputs.vol || issue.vol;
    issue.no = inputs.no || issue.no;
    issue.total = inputs.total || issue.total;
    issue.rem = inputs.rem || issue.rem;
    await Issue.save(issue);
    return { issue };
  }

  @Mutation(() => Boolean)
  async deleteIssue(@Arg("id", ()=>Int)  id: number): Promise<Boolean> {
    await Issue.delete(id);
    return true;
  }
}
