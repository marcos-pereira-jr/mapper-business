import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import {connect} from './config/db';
import { userRouter } from './routes/usuario';
import { postRouter } from './routes/post';

//Create aplication
export const app = express();
/*
    Free access to services 
*/
app.use(cors());


/**
 * Json Parse
**/
app.use(express.json());

/* 
    Log
*/
app.use(logger('dev'));

/* 
    Connect BD
*/
connect();

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/', (req, res) => res.send('API'));


