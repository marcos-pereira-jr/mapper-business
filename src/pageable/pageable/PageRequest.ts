import { IsOptional, IsPositive } from "class-validator";

export class PageRequest {
  
    private _defaultPage :number = 20; 
    private _defaultSize:number = 20; 

    @IsPositive()
    @IsOptional()
    private _page : number;

    @IsPositive()
    @IsOptional()
    private _size : number

    public get page(): number {
        return this._page || this._defaultPage;
    }

    public set page(page: number) {
        this._page = page ;
    }

    public get size(): number {
        return this._size || this._defaultSize;
    }

    public set size(size: number) {
        this._size = size;
    }



    getQuery(){
        return {
            skip: this._page || this._defaultPage,
            take: this._size || this._defaultSize,
        }
    }
    
}