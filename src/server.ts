import { getApp } from './app';
import { connect } from './config/db';

const PORT = 3000;

/* 
    Connect BD
*/
connect().then(()=>{
    const app = getApp();
    const server = app.listen(PORT,()=>{
        console.log(`LOG(INFO) - App listen port ${PORT}`)
    });
    /* 
        Close the Server
    */
    process.on('SIGINT',()=>{
        server.close();
        console.log("LOG(INFO) - App shutdown");
    })
});
