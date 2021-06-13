import { PageRequest } from '../../pageable/pageable/PageRequest';
import { CrudRepository } from '../../repository/generic/CrudRepository';
import { Page } from '../../pageable/page/page';

export class CrudService<ENTITY>{
    
    protected repository : CrudRepository<ENTITY>;

    constructor(repository : CrudRepository<ENTITY>){
       this.repository = repository;
    }

    async listAll(pageRequest : PageRequest): Promise<Page<ENTITY>>{
        return await this.repository.listAll(pageRequest);
    }

    async save(entity : ENTITY ) : Promise<ENTITY>  {
        return this.repository.save(entity);
    }

    async getById(id:number): Promise<ENTITY>{
        return await this.repository.getById(id);
    }
    async update(entity : ENTITY) : Promise<ENTITY>{
        return await this.repository.update(entity);
    }
}