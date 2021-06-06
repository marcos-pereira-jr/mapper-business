import { CnaeRepository } from '../../repository/cnae/CnaeRepository';
import { CnaeDTO } from '../../dto/cnae/CnaeDTO';
import { FileService } from '../file/FileService';
import { CsvService } from '../csv/CsvService';
const csv = require('csv-parser');
const fs = require('fs');



const cnaeRepository :  CnaeRepository = new CnaeRepository();
const csvService : CsvService = new CsvService();

export class CnaeService{
    async import(dir){
        const  mapper : Function  = async (row)=>{
            await cnaeRepository.save(new CnaeDTO(row).toEntity());
        }

        csvService.import(dir,mapper);
    }

}
