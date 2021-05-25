
import { User } from '../../entity/user/User';
import { JsonController, Param, Body, Get, Post, NotFoundError } from 'routing-controllers';
import { UserService } from '../../service/user/UserService';
import { Post as PostEntity } from '../../entity/post/Post';

const service : UserService = new UserService(); 


@JsonController()
export class UserController{

    @Post('/user')
    async save(@Body() user: User){
       return await service.save(user);
    } 

    @Get('/user')
    async listAll(){
        return await service.listAll();
    }

    @Get('/user/:id')
    async getById(@Param('id') id:number){
        return await service.getById(id);
    }

    @Get('/user/posts/:id')
    async getPosts(@Param('id') id:number){
        const user : User = await service.getById(id);
        if(user){
            const posts : PostEntity[] = await service.getPosts(id);
            return posts;
        }else{
            throw new NotFoundError(`User was not found.`); // message is optional
        }
        
    }
}