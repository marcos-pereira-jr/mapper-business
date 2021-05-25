import { getManager } from "typeorm";
import { Post } from '../../entity/post/Post';

export class PostRepository{
    async save(post: Post) : Promise<Post>  {
        return await getManager().save(post);
    }
}