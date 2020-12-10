import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity , ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./Article";
import { Borrow } from "./Borrow";
import { Journal } from "./Journal";


@ObjectType()
@Entity()
export class Issue extends BaseEntity {
  @Field(()=>Int)
  @PrimaryGeneratedColumn()
  id: number;


  @Field(()=>Int)
  @Column()
  year: number;

  @Field(()=>Int)
  @Column()
  vol: number;

  @Field(()=>Int)
  @Column()
  no: number;

  @Field(()=>Int)
  @Column({default: 0})
  total:number;

  @Field(()=>Int)
  @Column()
  rem: number;

  @Field(()=>Int)
  @Column()
  journalId: number;

  @OneToMany(() => Article, article => article.issue)
  articles: Article[];

  @ManyToOne(() => Journal, journal => journal.issues, {nullable: false})
  journal: Journal;

  @OneToMany(() => Borrow, borrow => borrow.journal)
  borrows: Borrow[];
}