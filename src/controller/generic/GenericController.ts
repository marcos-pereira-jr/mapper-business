import { O_TRUNC } from 'constants';
import { Get, Param, QueryParams, Req } from 'routing-controllers';
import { CrudService } from '../../service/generic/CrudService';
import { PageRequest } from '../../pageable/pageable/PageRequest';

export class CrudController<ENTITY,DTO>{
    
    _service : CrudService<ENTITY,DTO>

    constructor(service :CrudService<ENTITY,DTO>){
        this._service = service;
    }

    @Get()
    listAll(@QueryParams() pageRequest : PageRequest){
       return this._service.listAll(pageRequest);
    }
}