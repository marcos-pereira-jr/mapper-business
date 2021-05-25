import { JsonController,  Body, Post, NotFoundError } from 'routing-controllers';
import { UserService } from '../../service/user/UserService';
import { User } from '../../entity/user/User';
import { PostService } from '../../service/post/PostService';
import { PostDTO } from '../../dto/post/PostDTO';

const userService : UserService = new UserService();
const postService : PostService = new PostService();

@JsonController()
export class PostController{
    
    @Post('/post')
    async save(@Body() postDTO: PostDTO){
        const user : User = await userService.getById(postDTO.userId);
        if(!user){
            throw new NotFoundError(`User was not found.`);
        }
        return postService.save(postDTO,user);
    }

}