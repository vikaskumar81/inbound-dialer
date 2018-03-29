export interface DID
{
    id?:number,
    number?: number,
    idsupplier?: number,
    supplier?:string,
    idqueue?:number,
    queue?:string
   
}export interface HTTPDID
{
    number?: number,
    idsupplier?: number,
    supplier?:string,
    idqueue?:number,
    queue?:string
}
export class DIDForm implements HTTPDID{
    public number:number;
    public idsupplier:number;
    public supplier:string;
    public idqueue:number;
    public queue:string;

    constructor(data : DID) 
    {
        if(data==null)
        {
            this.number=-1;
            this.idsupplier=-1;
            this.supplier="";
            this.idqueue=-1;
            this.queue="";
        }
        else
        {
            this.number=data.number;
            this.idsupplier=data.idsupplier;
            this.supplier=data.supplier;
            this.idqueue=data.idqueue;
            this.queue=data.queue;
        }
    }
  }

