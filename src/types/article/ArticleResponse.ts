import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../FieldError";
import {Article} from "../../entities/Article";
@ObjectType()
export class ArticleResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  article?: Article;
}
