export class Page<Any> {
    private content : Any[];
    private page: number;
    private size: number;
    private total:number;

    constructor(content,page,total,size){
        this.content = content;
        this.page = page;
        this.total = total;
        this.size = size;
    }
    

}
