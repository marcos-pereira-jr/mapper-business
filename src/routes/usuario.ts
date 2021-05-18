import {Router} from "express";
export const userRouter = Router();

userRouter.get('/',(req,res)=>{
    return res.send('Serviços de Usuario')
});