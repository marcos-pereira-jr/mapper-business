import { Post } from '../../entity/post/Post';
import { User } from '../../entity/user/User';
import { PostRepository } from '../../repository/post/PostRepository';
import { PostDTO } from '../../dto/post/PostDTO';

const repository : PostRepository = new PostRepository();

export class PostService{

    async save(postDTO: PostDTO,user:User) : Promise<Post>  {
        const post  = new Post(postDTO.description,postDTO.date,user);
        return repository.save(post);
    }

}