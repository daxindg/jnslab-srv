import { Field, InputType} from "type-graphql";
@InputType()
export class UserRegisterInputs {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field({nullable: true})
  phone?: string;
  @Field()
  password: string;
}