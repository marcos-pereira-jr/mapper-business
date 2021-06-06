import { FileService } from '../file/FileService';

const csv = require('csv-parser');
const fs = require('fs');
const fileService :  FileService = new FileService();

export class CsvService{
    async import(dir :string,mapper : Function){
        const total : number = await fileService.getLenghtLine(dir);
        let progress :number = 0;

        fs.createReadStream(dir)
          .pipe(csv({ separator: ';',headers: false }))
          .on('data',async (row) => {
                await mapper(row)
                console.log("Processo de importação: " + Math.floor((progress/total) * 100) + "%")
                progress++;
          })
          .on('end', () => {
                console.log("Processo de importação : 100% - Completo")
          })
    }
    
}