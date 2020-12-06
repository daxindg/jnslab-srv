import { User } from "../entities/User";
import {
  Field,

  ObjectType
} from "type-graphql";
import { FieldError } from "./FieldError";


@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  user?: User;
}
