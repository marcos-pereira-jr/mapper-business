import { Post } from '../entity/Post';
import { getManager } from 'typeorm';
export class PostController{

    async save(post: Post){
        const postP  = await getManager().save(post);
        return postP;
    }

}