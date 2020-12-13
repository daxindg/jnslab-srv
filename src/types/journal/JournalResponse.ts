import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../FieldError";
import { Journal } from "../../entities/Journal";

@ObjectType()
export class JournalResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  journal?: Journal;
}
