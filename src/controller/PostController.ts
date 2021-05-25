import { UserController } from './UserController';
import { Post as PostEntiy } from '../entity/Post';
import { getManager } from 'typeorm';
import { JsonController,  Body, Post, NotFoundError } from 'routing-controllers';
import { UserService } from '../service/UserService';
import { User } from '../entity/User';
import { PostService } from '../service/PostService';
import { PostDTO } from '../dto/PostDTO';

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