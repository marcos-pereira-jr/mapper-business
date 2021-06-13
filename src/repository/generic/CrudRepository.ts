import { getManager } from 'typeorm';
import { PageRequest } from '../../pageable/pageable/PageRequest';
import { Page } from '../../pageable/page/page';

export type ObjectType<T> = { new (): T } | Function;

export class CrudRepository<T>{

    private type: ObjectType<T>;
    private repository;

    constructor(type: ObjectType<T>) {
        this.type = type;  
        this.repository= getManager().getRepository(this.type);   
    }

    async listAll(pageRequest: PageRequest) : Promise<Page<T>>{
        const [result, total] =  await this.repository.findAndCount(pageRequest.getQuery());
        return new Page(result,pageRequest.page,total,pageRequest.size);  
    }

    async save(entity: T) : Promise<T>  {
        const saveEntity = <T> entity ;
        return await this.repository.save(saveEntity);
    }

    async getById(id:number): Promise<T>{
        return await this.repository.findOne(id);
    }

    async update(entity : T) : Promise<T>{
        return await this.repository.save(entity);
    }
}