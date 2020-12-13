
import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Borrow } from "./Borrow";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: true })
  @Column({unique: true})
  username: string;

  @Field({ nullable: true })
  @Column({ unique: true })
  email: string;

  @Field(() => Int, { nullable: true})
  @Column({default: 0})
  permission: number

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true})
  phone: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt:Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt:Date;

  @OneToMany(() => Borrow, borrow => borrow.user)
  borrows: Borrow[];
}
