
import { JsonController, UploadedFile,Post } from 'routing-controllers';;
import { FileService } from '../../service/file/FileService';
import { CnaeService } from '../../service/cnae/CnaeService';


const fileService : FileService = new FileService();
const cnaeService : CnaeService = new CnaeService();
const  moment = require('moment');

@JsonController("/cnae")
export class CnaeController{

    @Post('/import')
    async uploadPhoto( @UploadedFile('file') file: any) {
        const date : string = moment(new Date()).format('YYYY-MM-DDHH:MM:SS');
        const fileName : string  = 'cnae-' + date + '.csv';
        
        const dir  = await fileService.upload("uploads/cnae",fileName,file);
        cnaeService.import(dir);
        return {
            filename: file.originalname,
            size: file.size,
            fieldname: file.fieldname
        };
    }
}

    