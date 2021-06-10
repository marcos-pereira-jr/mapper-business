
import { JsonController, UploadedFile,Post, Get } from 'routing-controllers';;
import { FileService } from '../../service/file/FileService';
import { CnaeService } from '../../service/cnae/CnaeService';
import { CrudController } from '../generic/CrudController';
import { CnaeDTO } from '../../dto/cnae/CnaeDTO';
import { Cnae } from '../../entity/cnae/Cnae';
import { CnaeRepository } from '../../repository/cnae/CnaeRepository';


const fileService : FileService = new FileService();
const cnaeService : CnaeService = new CnaeService(new CnaeRepository(Cnae));
const  moment = require('moment');

@JsonController("/cnae")
export class CnaeController extends CrudController<Cnae>{

    constructor(){
        super(cnaeService);
    }

    @Post('/import')
    async uploadPhoto( @UploadedFile('file') file) {
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

    