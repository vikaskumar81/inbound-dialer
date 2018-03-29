export interface Extension
{
    id?:number,
    username?:string,
    secret?:string,
    callerid?:number,
    exten?:string,
    host?:string
}

export interface HTTPExtension
{
    username?:string,
    secret?:string,
    callerid?:number,
    exten?:string,
    host?:string
}

export class ExtensionForm implements HTTPExtension
{
    public username:string;
    public secret:string;
    public callerid:number;
    public exten:string;
    public host:string;

    constructor(data:Extension) 
    {
        if(data==null)
        {
            this.username="";
            this.secret="";
            this.callerid=-1;
            this.exten="";
            this.host="dynamic";
        }
        else
        {
            this.username=data.username;
            this.secret=data.secret;
            this.callerid=data.callerid;
            this.exten=data.exten;
            this.host=data.host;
        }
    }    
  }