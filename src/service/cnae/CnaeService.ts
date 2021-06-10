import { CnaeDTO } from '../../dto/cnae/CnaeDTO';
import { CsvService } from '../csv/CsvService';
import { CrudService } from '../generic/CrudService';
import { Cnae } from '../../entity/cnae/Cnae';

const csvService : CsvService = new CsvService();

export class CnaeService  extends CrudService<Cnae> {
    
    async import(dir){
        const  mapper : Function  = async (row)=>{
            await this.repository.save(new CnaeDTO(row).toEntity());
        }

        csvService.import(dir,mapper);
    }

}
