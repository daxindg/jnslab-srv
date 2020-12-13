import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class JournalSearchInputs {
  @Field({nullable: true})
  title: string;
  
  @Field({nullable: true})
  issn: string;

  @Field({nullable: true})
  cn: string;

}