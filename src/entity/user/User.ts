import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Post } from '../post/Post';

@Entity()
export class User {

    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    //OneToMany(()=> Post, post => post.user)
    @OneToMany(() => Post, post => post.user)
    posts: Post[];

}
