export interface Supplier
{
    id:number,
    name?:string,
    prefix?:string,
    ipaddr?:string
    
}

export interface HTTPSupplier
{
    name?:string,
    prefix?:string,
    ipaddr?:string
   
}

export class SupplierForm implements HTTPSupplier{
    public name: string;
    public prefix: string;
    public ipaddr: string;
    
    constructor( data : Supplier) 
    {
        if(data==null)
        {
            this.name="";
            this.prefix="";
            this.ipaddr="";
          
        }
        else
        {
            this.name=data.name;
            this.prefix=data.prefix;
            this.ipaddr=data.ipaddr;
            
        }
    }
    
  }
  