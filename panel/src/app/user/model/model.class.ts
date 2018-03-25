export interface User
{
    id?:number,
    username: string,
    password:string,
    contact?:string,
    company?:string,
    minutes?:number
}

export interface HTTPUser
{
    username: string,
    password:string,
    contact?:string,
    company?:string
}

export class UserForm implements HTTPUser{
    public username: string;
    public password:string;
    public contact:string;
    public company:string;

    constructor(data : User) 
    {
        if(data==null)
        {
            this.username="";
            this.password="";
            this.contact="";
            this.company="";
        }
        else
        {
            this.username=data.username;
            this.password=data.password;
            this.contact=data.contact;
            this.company=data.company;
        }
    }
  }