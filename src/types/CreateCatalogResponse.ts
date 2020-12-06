import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./FieldError";
import { Catalog } from "../entities/Catalog";

@ObjectType()
export class CreateCatalogResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  catalog?: Catalog;
}
