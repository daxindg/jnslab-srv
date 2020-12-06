import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity , ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Artical } from "./Article";
import { Borrow } from "./Borrow";
import { Catalog } from "./Catalog";


@ObjectType()
@Entity()
export class Journal extends BaseEntity {
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
  @Column()
  total:number;

  @Field(()=>Int)
  @Column()
  rem: number;

  @OneToMany(() => Artical, artical => artical.journal)
  articals: Artical[];

  @ManyToOne(() => Catalog, catalog => catalog.journals, {nullable: false})
  catalog: Catalog;

  @OneToMany(() => Borrow, borrow => borrow.journal)
  borrows: Borrow[];
}