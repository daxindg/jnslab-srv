import { Field, InputType, Int } from "type-graphql";

@InputType()
export class IssueInputs {

  @Field(()=>Int)
  year: number;

  @Field(()=>Int)
  vol: number;

  @Field(()=>Int)
  no: number;

  @Field(()=>Int)
  total:number;

  @Field(()=>Int, {nullable: true})
  rem?:number;
}
