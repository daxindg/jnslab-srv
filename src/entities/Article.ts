import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Issue } from "./Issue";


@ObjectType()
@Entity()
export class Article extends BaseEntity {
  @Field(()=>Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  authors: string;

  @Field()
  @Column()
  keywords: string;

  @Field(()=>Int)
  @Column()
  pbegin:number;

  @Field(()=>Int)
  @Column()
  pend: number;

  @ManyToOne(() => Issue, issue => issue.articles, {nullable: false})
  issue: Issue;
  
  @Field(() => Int)
  @Column()
  issueId: number;
}