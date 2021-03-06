
import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Issue } from "./Issue";

@ObjectType()
@Entity()
export class Journal extends BaseEntity {


  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({nullable:true})
  @Column()
  title!: string;

  @Field({nullable:true})
  @Column({unique: true})
  issn!: string;

  @Field({nullable:true})
  @Column({unique: true, nullable:true})
  cn: string;

  @Field({nullable:true})
  @Column({unique: true, nullable:true})
  yfdh: string;

  @Field({nullable:true})
  @Column()
  period: string;

  @Field({nullable:true})
  @Column({nullable:true})
  pub_place: string;

  @Field({nullable:true})
  @Column({nullable:true})
  organizer: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt:Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt:Date;

  @Field(() => [Issue], {nullable: true})
  @OneToMany(() => Issue, issue => issue.journal)
  issues: Issue[];
}
