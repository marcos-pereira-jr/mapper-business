import { Get, Param, QueryParams, Body,Post, Put } from 'routing-controllers';
import { CrudService } from '../../service/generic/CrudService';
import { PageRequest } from '../../pageable/pageable/PageRequest';
import { Page } from '../../pageable/page/page';
export class CrudController<ENTITY>{
    
    protected service : CrudService<ENTITY>

    constructor(service :CrudService<ENTITY>){
        this.service = service;
    }

    @Get()
    async listAll(@QueryParams() pageRequest : PageRequest): Promise<Page<ENTITY>>{
       return await this.service.listAll(pageRequest);
    }

    @Get('/:id')
    async getById(@Param('id') id:number){
        return await this.service.getById(id);
    }

    @Post()
    async save(@Body() entity: ENTITY){
        return this.service.save(entity);
    }

    @Put()
    async update(@Body() entity: ENTITY){
        return this.service.update(entity);
    }

}