import { User } from '../entity/User';
import { Post } from "../entity/Post";
import { UserRepository } from '../repository/UserRepository';

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