export interface DID
{
    id?:number,
    number?: number,
    id_supplier?: number,
    supplier?:string
}

export interface HTTPDID
{
    number?: number,
    id_supplier?: number
}

export class DIDForm implements HTTPDID{
    public number:number;
    public id_supplier:number;

    constructor(data : DID) 
    {
        if(data==null)
        {
            this.number=-1;
            this.id_supplier=-1;
        }
        else
        {
            this.number=data.number;
            this.id_supplier=data.id_supplier;
        }
    }
  }

