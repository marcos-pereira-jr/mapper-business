import { PageRequest } from '../../pageable/pageable/PageRequest';
import { CrudRepository } from '../../repository/generic/GenericRepository';

export class CrudService<ENTITY,DTO>{
    
    protected repository : CrudRepository<ENTITY>;

    constructor(repository : CrudRepository<ENTITY>){
       this.repository = repository;
    }

    async save(entity : ENTITY ) : Promise<ENTITY>  {
        return this.repository.save(entity);
    }

    async listAll(pageRequest : PageRequest): Promise<ENTITY[]>{
        return await this.repository.listAll();
    }

    async getById(id:number): Promise<ENTITY>{
        return await this.repository.getById(id);
    }
}