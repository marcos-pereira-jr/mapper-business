import { IsPositive } from "class-validator";

export class PageRequest {
    
    @IsPositive()
    page : number;

    @IsPositive()
    size : number;
}