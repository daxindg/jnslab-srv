import { Field, InputType, Int } from "type-graphql";
@InputType()
export class ArticleInputs {
  @Field()
  title: string;
  @Field()
  authors: string;
  @Field()
  keywords: string;
  @Field(() => Int, { nullable: true })
  pbegin: number;
  @Field(() => Int, { nullable: true })
  pend: number;
}
