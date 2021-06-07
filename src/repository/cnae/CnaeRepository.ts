import { getManager } from "typeorm";
import { Cnae } from '../../entity/cnae/Cnae';

export class CnaeRepository{
    async save(cnae: Cnae) : Promise<Cnae>  {
        return await getManager().save(cnae);
    }
}