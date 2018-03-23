export interface Supplier
{
    id:number,
    name:string,
    prefix:string,
    ipaddr:string,
    description:string
}
export class SupplierForm {
    constructor(
        public id?: number,
        public name?: string,
        public prefix?: string,
        public ipaddr?: string,
        public description?: string
    ) {}
    
  }
  