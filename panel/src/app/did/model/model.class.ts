export interface DID
{
    id?:number,
    number?: number,
    idsupplier?: number,
    areacode?:number,
    did_rate?:number,
    setup_cost?:number
}

export interface HTTPDID
{
    number?: number,
    idsupplier?: number,
    areacode?:number,
    did_rate?:number,
    setup_cost?:number
}

export class DIDForm implements HTTPDID{
    public number:number;
    public idsupplier:number;

    constructor(data : DID) 
    {
        if(data==null)
        {
            this.number=-1;
            this.idsupplier=-1;
        }
        else
        {
            this.number=data.number;
            this.idsupplier=data.idsupplier;
        }
    }
  }

