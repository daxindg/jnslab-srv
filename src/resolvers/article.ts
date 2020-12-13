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
import { Article } from "../entities/Article";
import { Issue } from "../entities/Issue";
import { canEdit } from "../middleware/canEdit";
import { isLogedin } from "../middleware/isLogedin";
import { ArticleInputs } from "../types/article/ArticleInputs";
import { ArticleResponse } from "../types/article/ArticleResponse";
import { unknownErros } from "../types/Errors";
import { verifyArticleInput } from "../utils/verifyArticleInputs";

@Resolver(() => Article)
export class ArticleResolver {
  // Field resolvers

  @FieldResolver(() => Issue)
  async issue(@Root() article: Article): Promise<Issue | undefined> {
    const res = await Article.findOne(article.id, { relations: ["issue"] });
    return res?.issue;
  }

  @Query(() => [Article])
  articleCatalog(): Promise<Article[]> {
    return Article.find();
  }

  @Query(() => Article, { nullable: true })
  async article(
    @Arg("id", () => Int) id: number,
    @Arg("detail", () => Boolean, { nullable: true }) detail: boolean
  ): Promise<Article | undefined> {
    if (detail) detail;
    return await Article.findOne(id);
  }

  @Mutation(() => ArticleResponse)
  @UseMiddleware([isLogedin, canEdit])
  async createArticle(
    @Arg("issueId", () => Int) issueId: number,
    @Arg("inputs") inputs: ArticleInputs
  ): Promise<ArticleResponse> {
    const { errors, inputs: verifiedInputs } = await verifyArticleInput(
      inputs,
      issueId
    );
    if (errors) return { errors };
    if (!verifiedInputs)
      return {
        errors: [
          {
            field: "unknown",
            message: "This shouldn't heppen",
          },
        ],
      };
    inputs = verifiedInputs;
    const issue = await Issue.findOne({ where: { id: issueId } });
    if (!issue) {
      throw Error("Invalid issue id");
    }
    const article = new Article();
    article.title = inputs.title;
    article.authors = inputs.authors;
    article.keywords = inputs.keywords;
    article.pbegin = inputs.pbegin;
    article.pend = inputs.pend;
    article.issue = issue;

    await Article.save(article);
    return { article };
  }

  @Mutation(() => ArticleResponse)
  @UseMiddleware([canEdit])
  async updateArticle(
    @Arg("id", () => Int) id: number,
    @Arg("inputs") inputs: ArticleInputs
  ): Promise<ArticleResponse> {
    const article = await Article.findOne(id);
    if (!article) {
      return {
        errors: unknownErros,
      };
    }

    const { errors, inputs: verifiedInputs } = await verifyArticleInput(
      inputs,
      article.issueId,
      id
    );
    if (errors) return { errors };
    // console.log(inputs);
    if (!verifiedInputs) {
      return {
        errors: unknownErros,
      };
    }
    inputs = verifiedInputs;
    article.authors = inputs.authors || article.authors;
    article.keywords = inputs.keywords || article.keywords;
    article.title = inputs.title || article.title;
    article.pbegin = inputs.pbegin || article.pbegin;
    article.pend = inputs.pend || article.pend;
    await Article.save(article);
    return { article };
  }

  @Mutation(() => Boolean)
  async deleteArticle(@Arg("id", () => Int) id: number): Promise<Boolean> {
    await Article.delete(id);
    return true;
  }

  @Query(() => [Article])
  async searchArticle(
    @Arg("searchText") searchText: string,
    @Arg("type") type: "title" | "keyword" | "author",
    @Arg("cursor", () => Int, { defaultValue: 0 }) cursor: number,
    @Arg("limit", () => Int, { defaultValue: 10 }) limit: number
  ): Promise<Article[]> {
    searchText = searchText.trim();
    if (!searchText) return [];
    if (type === "author") {
      return Article.find({
        where: {
          authors: Like(`%${searchText}%`),
          id: cursor ? LessThan(cursor) : MoreThan(cursor),
        },
        order: { id: "DESC" },
        take: limit,
      });
    }
    if (type === "keyword") {
      return Article.find({
        where: {
          keywords: Like(`%${searchText}%`),
          id: cursor ? LessThan(cursor) : MoreThan(cursor),
        },
        order: { id: "DESC" },
        take: limit,
      });
    }
    if (type === "title") {
      return Article.find({
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
