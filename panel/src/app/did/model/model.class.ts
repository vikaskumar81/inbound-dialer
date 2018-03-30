export interface DID
{
    id?:number,
    number?: number,
    id_supplier?: number,
    supplier?:string,
    id_queue?:number,
    queue?:string,
    description?:string,
    didprovider?:string,
    customer?:string,
    id_customer?: number
   
}export interface HTTPDID
{
    number?: number,
    id_supplier?: number,
    supplier?:string,
    id_queue?:number,
    queue?:string,
    description?:string,
    didprovider?:string,
    customer?:string,
    id_customer?: number
   
}
export class DIDForm implements HTTPDID{
    public number:number;
    public id_supplier:number;
    public supplier:string;
    public id_queue:number;
    public queue:string;
    public description:string;
    public didprovider?:string;
    public customer?:string;
    public id_customer?:number;

    constructor(data : DID) 
    {
        if(data==null)
        {
            this.number=0;
            this.id_supplier=-1;
            this.supplier="";
            this.id_queue=-1;
            this.queue="";
            this.description="";
            this.didprovider="";
            this.customer="";
            this.id_customer=-1;
        }
        else
        {
            this.number=data.number;
            this.id_supplier=data.id_supplier;
            this.supplier=data.supplier;
            this.id_queue=data.id_queue;
            this.queue=data.queue;
            this.description=data.description;
            this.id_customer=data.id_customer;
            this.customer=data.customer;
            this.didprovider=data.didprovider;
        }
    }
  }

