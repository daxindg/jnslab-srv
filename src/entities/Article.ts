import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Journal } from "./Journal";


@ObjectType()
@Entity()
export class Artical extends BaseEntity {
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

  @ManyToOne(() => Journal, journal => journal.articals, {nullable: false})
  journal: Journal;

}