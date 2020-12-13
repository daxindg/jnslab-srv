import { Field, InputType } from "type-graphql";

@InputType()
export class JournalSearchInputs {
  @Field({nullable: true})
  searchText: string;
  
  // @Field({nullable: true})
  // issn: string;

  // @Field({nullable: true})
  // cn: string;

}