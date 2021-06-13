import * as express from "express";
import * as logger from "morgan";
import {connect} from './config/db';
import { createExpressServer } from 'routing-controllers';

//Create aplication
console.log(__dirname + '/controllers/*.ts');
export const getApp = () => {
  const app  = createExpressServer({
    controllers: [__dirname + '/controller/**/*.ts'] // we specify controllers we want to use
  });
  
/*
    Free access to services 
    conflit with router-controller
    */
//app.use(cors());


/**
 * Json Parse
**/
app.use(express.json());

/* 
    Log
*/
app.use(logger('dev'));

return app;
}