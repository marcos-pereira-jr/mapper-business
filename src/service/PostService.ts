import { getManager } from 'typeorm';
import { IPostPayload } from '../controller/PostController';
import { Post } from '../entity/Post';
import { UserService } from './UserService';
import { User } from '../entity/User';

export class PostService{

    async save(postDTO: IPostPayload,user:User) : Promise<Post>  {
        const post  = new Post(postDTO.description,postDTO.date,user);
        const postP  = await getManager().save(post);
        return postP;
    }

}