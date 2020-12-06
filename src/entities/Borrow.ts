import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Journal } from "./Journal";
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

  @Field(() => Date)
  @Column({nullable: true})
  returnAt: Date;

  @Field(() => Date)
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Journal, journal => journal.borrows, {nullable: false})
  journal: Journal;

  @ManyToOne(() => User, user => user.borrows, {nullable: false})
  user: User;

}