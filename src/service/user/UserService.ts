import { User } from '../../entity/user/User';
import { Post } from "../../entity/post/Post";
import { UserRepository } from '../../repository/user/UserRepository';

const repository : UserRepository = new UserRepository();

export class UserService {

    async listAll() : Promise<User[]> {
        return await repository.listAll();
    } 

    async getById(id:number): Promise<User>{
        return await repository.getById(id);
    }

    async save(user: User): Promise<User>{
       return await repository.save(user);
    } 

    async getPosts(id:number):Promise<Post[]>{
        return await repository.getPosts(id);
    }
}