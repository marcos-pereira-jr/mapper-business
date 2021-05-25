import { getManager } from "typeorm";
import { User } from '../../entity/user/User';
import { Post } from '../../entity/post/Post';

export class UserRepository {

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