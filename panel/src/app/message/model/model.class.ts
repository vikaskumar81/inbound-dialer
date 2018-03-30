export interface Message
{
    id?:number,
    filename?: string,
    name?: string
    
}

export interface HTTPMessage
{
    name?:string;
    filename?: string
    
}

export class MessageForm implements HTTPMessage{
    public name:string;
    public filename:string;
  

    constructor(data : Message) 
    {
        if(data==null)
        {
            this.name="";
            this.filename="";
          
        }
        else
        {
            this.name=data.name;
            this.filename=data.filename;
            
        }
    }
  }

