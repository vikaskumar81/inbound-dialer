export interface Extension
{
    id:number,
    username:string,
    password:string,
    callerid:string,
    extension:string,
    host:number
}
export class ExtensionForm {
    constructor(
        public id?: number,
        public username?: string,
        public password?: string,
        public callerid?: string,
        public extension?: string,
        public host?:number
    ) {}    
  }
  