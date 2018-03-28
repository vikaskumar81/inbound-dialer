export interface Extension
{
    id?:number,
    username?:string,
    password?:string,
    callerid?:number,
    extension?:string,
    host?:string
}

export interface HTTPExtension
{
    username?:string,
    password?:string,
    callerid?:number,
    extension?:string,
    host?:string
}

export class ExtensionForm implements HTTPExtension
{
    public username:string;
    public secret:string;
    public callerid:number;
    public extension:string;
    public host:string;

    constructor(data:Extension) 
    {
        if(data==null)
        {
            this.username="";
            this.secret="";
            this.callerid=-1;
            this.extension="";
            this.host="dynamic";
        }
        else
        {
            this.username=data.username;
            this.secret=data.password;
            this.callerid=data.callerid;
            this.extension=data.extension;
            this.host=data.host;
        }
    }    
  }