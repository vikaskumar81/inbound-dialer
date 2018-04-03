export interface DID
{
    id?:number,
    number?: number,
    idsupplier?: number,
    queue_name?:number,
    iduser?:number
   
   
   
}export interface HTTPDID
{
    
    number?: number,
    idsupplier?: number,
    queue_name?:number,
    iduser?:number
   
   
}
export class DIDForm implements HTTPDID{
    public number:number;
    public idsupplier:number;
   
    public queue_name:number;
     public iduser?:number;

    constructor(data : DID) 
    {
        if(data==null)
        {
            this.number=0;
            this.idsupplier=-1;
           
            
             this.iduser=-1;
        }
        else
        {
            this.number=data.number;
            this.idsupplier=data.idsupplier;
           
            this.queue_name=data.queue_name;
            this.iduser=data.iduser;
          
        }
    }
  }

