import { Field, ObjectType } from "type-graphql";
import { Issue } from "../entities/Issue";
import { FieldError } from "./FieldError";

@ObjectType()
export class IssueResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  issue?: Issue;
}
