import { Get, Param, QueryParams, Body,Post } from 'routing-controllers';
import { CrudService } from '../../service/generic/GenericService';
import { PageRequest } from '../../pageable/pageable/PageRequest';
export class CrudController<ENTITY,DTO>{
    
    protected service : CrudService<ENTITY,DTO>

    constructor(service :CrudService<ENTITY,DTO>){
        this.service = service;
    }

    @Get()
    listAll(@QueryParams() pageRequest : PageRequest): Promise<ENTITY[]>{
       return this.service.listAll(pageRequest);
    }

    @Get('/user/:id')
    async getById(@Param('id') id:number){
        return await this.service.getById(id);
    }

    @Post()
    async save(@Body() entity: ENTITY){
        console.log("e",entity);
        return this.service.save(entity);
    }
}