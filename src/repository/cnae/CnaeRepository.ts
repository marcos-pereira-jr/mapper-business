import { getManager } from "typeorm";
import { Cnae } from '../../entity/cnae/Cnae';
import { CrudRepository } from '../generic/CrudRepository';

export class CnaeRepository extends CrudRepository<Cnae>{
}