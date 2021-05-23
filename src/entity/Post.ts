import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity()
export class Post {
  constructor(description: String, data: Date, user : User) {
    this.description = description
    this.data = data
    this.user = user
  } 

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: String;


    @Column()
    data: Date;

    @ManyToOne(()=> User)
    user: User;
}