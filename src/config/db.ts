import { createConnection } from "typeorm"

export const connect = async () =>{
    const connection = await createConnection();
    console.log(`LOG(INFO) - Connected database app ${connection.options.database}`);

    process.on('SIGINT',()=>{
        connection.close().then(()=>{
            console.log("LOG(INFO) - Connected database close");
        });
    });
}