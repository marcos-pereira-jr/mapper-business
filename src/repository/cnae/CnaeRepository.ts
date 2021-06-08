import { getManager } from "typeorm";
import { Cnae } from '../../entity/cnae/Cnae';
import { CrudRepository } from '../generic/GenericRepository';

export class CnaeRepository extends CrudRepository<Cnae>{
    async save(cnae: Cnae) : Promise<Cnae>  {
        return await getManager().save(cnae);
    }
}