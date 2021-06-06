import { Log } from '../../log/Log';
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


export class FileService {

    async upload(path : string,fileName, file:any) : Promise<string> {
        const dir :string = path + "/" + fileName;

        Log.info(`Start file upload ${dir}`);
        await this.save(file,dir);
        Log.info(`Upload completed ${dir}`);
        
        return dir;
    }

    async save(file,dir) : Promise<string>{
        return new Promise(resolve =>  fs.writeFile(dir, file.buffer,resolve));
    }

    async getLenghtLine(dir :string):Promise<number>{
        const { stdout } = await exec(`cat ${dir} | wc -l`);
        return parseInt(stdout) -1;
    }

}