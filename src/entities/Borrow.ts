import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Issue } from "./Issue";
import { User } from "./User";


@ObjectType()
@Entity()
export class Borrow extends BaseEntity {
  @Field(()=>Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(()=>Int)
  @Column()
  state: number;

  @Field(() => Date)
  @Column()
  expireAt: Date;

  @Field(() => Date)
  @Column()
  borrowAt: Date;

  @Field(() => Date, {nullable: true})
  @Column({nullable: true})
  returnAt: Date;

  @Field(() => Date)
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Issue, issue => issue.borrows, {nullable: false})
  issue: Issue;

  @ManyToOne(() => User, user => user.borrows, {nullable: false})
  user: User;

  @Field(()=>Int)
  @Column()
  issueId: number;

  @Field(()=>Int)
  @Column()
  userId: number;
}