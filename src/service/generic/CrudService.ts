import { PageRequest } from '../../pageable/pageable/PageRequest';

export class CrudService<ENTITY,DTO>{
    listAll(pageRequest : PageRequest): string{
        console.log(pageRequest);
        return "finalmente";
    }
}