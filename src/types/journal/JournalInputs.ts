import { Field, InputType } from "type-graphql";
@InputType()
export class JournalInputs {
  @Field()
  title: string;
  @Field()
  issn: string;
  @Field()
  period: string;
  @Field({nullable: true})
  cn?: string;
  @Field({nullable: true})
  yfdh?: string;
  @Field({nullable: true})
  organizer?: string;
  @Field({nullable: true})
  pub_place?: string;
}
