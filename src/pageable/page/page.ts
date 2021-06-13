export class Page<Any> {
    private _content : Any[];
    private _page: number;
    private _size: number;

    constructor(content,page,size){
        this._content = content;
        this._page = page;
        this._size = size;
    }
    public set content(content : any[]){
        this._content = content;
    }
    public set page(page: number){
        this._page = page;
    }
    public set size(size:number){
        this._size = size;
    }

    public get content(){
        return this._content;
    }
    public get page(){
        return this._page;
    }
    public get size(){
        return this._size;
    }
    

}