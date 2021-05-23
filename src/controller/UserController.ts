import { getManager } from "typeorm";
import { User } from '../entity/User';

export class UserController{
    async save(user: User){
       return await getManager().save(user);
    } 

    async listAll(){
        const users = await getManager().find(User);
        return users;
    }
    async getById(id:number){
        return await getManager().findOne(User,id);
    }

    async getPosts(id :number){
        const user = await getManager().findOne(User,id,{
            relations: ['posts']
        });
        return user.posts;
    }
}