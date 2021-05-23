import { getManager } from "typeorm";
import { User } from '../entity/User';
import { Post } from "../entity/Post";


export class UserService {

    async listAll() : Promise<User[]> {
        const users: User[]  = await getManager().find(User);
        return  users;
    } 

    async getById(id:number): Promise<User>{
        return await getManager().findOne(User,id);
    }

    async save(user: User): Promise<User>{
       return await getManager().save(user);
    } 

    async getPosts(id:number):Promise<Post[]>{
        const user = await getManager().findOne(User,id,{
            relations: ['posts']
        });
        return user.posts;
    }
}