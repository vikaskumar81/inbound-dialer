export interface Queue
{
    id?:number,
    queue_name?: string,
    strategy?:string,
    maxlen?:number,
    retry?:number,
    announce_holdtime?:string,
    monitor_type?:number,
    timeout?:number,
    monitor_format?:number,
    iduser:number,
    extension:number
}

export interface HTTPQueue
{
    queue_name?: string,
    strategy?:string,
    maxlen?:number,
    retry?:number,
    announce_holdtime?:string,
    monitor_type?:number,
    timeout?:number,
    monitor_format?:number,
    iduser:number,
    extension:number

}

export class QueueForm implements HTTPQueue{
    public queue_name: string;
    public strategy:string;
    public maxlen:number;
    public retry:number;
   
    public announce_holdtime:string;
  
    public monitor_type:number;
    public timeout:number;
    public monitor_format:number;
    public iduser:number;
    public extension:number;

    constructor(data : Queue) 
    {
        if(data==null)
        {
            this.queue_name="";
            this.strategy="roundrobin";
            this.maxlen=0;
            this.retry=0;
           
            this.announce_holdtime="yes";
           
            this.monitor_type=1;
            this.timeout=1;
            this.monitor_format=1;
            this.iduser=1;
            this.extension=1;
        }
        else
        {
            this.queue_name=data.queue_name;
            this.strategy=data.strategy;
            this.maxlen=data.maxlen;
            this.retry=data.retry;
          
            this.announce_holdtime=data.announce_holdtime;
          
            this.monitor_type=data.monitor_type;
            this.timeout=data.timeout;
            this.monitor_format=data.monitor_format;
            this.iduser=data.iduser;
            this.extension=data.extension;
        }
    }
  }

