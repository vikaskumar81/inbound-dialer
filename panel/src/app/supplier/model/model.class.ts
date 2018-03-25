export interface Supplier
{
    id?:number,
    name:string,
    prefix:string,
    ipaddr:string,
    description?:string
}

export interface HTTPSupplier
{
    name:string,
    prefix:string,
    ipaddr:string,
    description?:string
}

export class SupplierForm implements HTTPSupplier{
    public name: string;
    public prefix: string;
    public ipaddr: string;
    public description: string;
    constructor( data : Supplier) 
    {
        if(data==null)
        {
            this.name="";
            this.prefix="";
            this.ipaddr="";
            this.description="";
        }
        else
        {
            this.name=data.name;
            this.prefix=data.prefix;
            this.ipaddr=data.ipaddr;
            this.description=data.description;
        }
    }
    
  }
  