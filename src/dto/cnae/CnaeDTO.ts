import { Cnae } from '../../entity/cnae/Cnae';

export class CnaeDTO {
    constructor(row){
        this.id = null
        this.number = row['0'];
        this.description = row['1'];
    }
    
    id : number;
    number: string;
    description: string;


    toEntity() : Cnae {
         const cnae : Cnae =  new Cnae();   
         cnae.id = this.id;
         cnae.number = this.number;
         cnae.description = this.description;
         return cnae;
     }
}