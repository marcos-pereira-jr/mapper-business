import { IsOptional, IsPositive } from "class-validator";

export class PageRequest {
    
    @IsPositive()
    @IsOptional()
    page : number;

    @IsPositive()
    @IsOptional()
    size : number;

    getQuery(){
        return {
            skip: this.page || 0,
            take: this.size || 10,
        }
    }
}