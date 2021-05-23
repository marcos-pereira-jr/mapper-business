import { Router } from 'express';
import { PostController } from '../controller/PostController';
import { UserController } from '../controller/UserController';
import { Post } from '../entity/Post';


export const postRouter = Router();
const controller = new PostController();
const userController = new UserController();

postRouter.post("/",async (req,res)=>{
    const {userId, value, date,description} = req.body;
    const user  = await userController.getById(userId);
    if(user){
        const post  = new Post(description,date,user);
        const saved  = await controller.save(post);
        return res.json(saved);
    }else{
        res.status(404).json({message:"Usuário não encontrado"});
    }
})