import { getManager } from 'typeorm';

export type ObjectType<T> = { new (): T } | Function;

export class CrudRepository<T>{

    private type: ObjectType<T>;

    constructor(type: ObjectType<T>) {
        this.type = type;        
    }

    async save(entity: T) : Promise<T>  {
        return await getManager().save(entity);
    }

    async listAll() : Promise<T[]>{
        return await getManager().find(this.type);

    }

    async getById(id:number): Promise<T>{
        return await getManager().findOne(this.type,id);
    }
}