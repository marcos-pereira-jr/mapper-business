import { Post } from '../entity/Post';
import { User } from '../entity/User';
import { PostRepository } from '../repository/PostRepository';
import { PostDTO } from '../dto/PostDTO';

const repository : PostRepository = new PostRepository();

export class PostService{

    async save(postDTO: PostDTO,user:User) : Promise<Post>  {
        const post  = new Post(postDTO.description,postDTO.date,user);
        return repository.save(post);
    }

}