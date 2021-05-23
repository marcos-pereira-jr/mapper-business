import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity()
export class Post {
  constructor(description: String, date: Date, user : User) {
    this.description = description
    this.date = date
    this.user = user
  } 

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: String;

    @Column()
    date: Date;

    @ManyToOne(()=> User)
    user: User;
}