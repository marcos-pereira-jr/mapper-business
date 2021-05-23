import {response, Router} from "express";
import { User } from '../entity/User';
import { UserController } from '../controller/UserController';
export const userRouter = Router();
const controller = new UserController();


userRouter.post('/',async (req,resp)=>{
    const {name, email} = req.body;
    console.log("name",name);
    console.log("email",email);
    const usuario = new User(name,email);
    const usarioPesist = await controller.save(usuario);
    resp.json(usarioPesist);
});

userRouter.get('/', async (req,resp)=>{
    const users = await controller.listAll();
    resp.json(users);
});

userRouter.get('/posts/:id', async (req,resp)=>{
    const  id  = parseInt(req.params.id);
    const pots = await controller.getPosts(id);
    resp.json(pots);
})
