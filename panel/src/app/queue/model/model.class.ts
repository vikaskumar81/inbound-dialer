export interface Queue
{
    id?:number,
    name?: string,
    strategy?:string,
    maxlen?:number,
    retry?:number,
    wrapuptime?:number,
    announce_frequency?:number,
    announce_holdtime?:string,
    ringinuser?:string
}

export interface HTTPQueue
{
    name?: string,
    strategy?:string,
    maxlen?:number,
    retry?:number,
    wrapuptime?:number,
    announce_frequency?:number,
    announce_holdtime?:string,
    ringinuser?:string
}

export class QueueForm implements HTTPQueue{
    public name: string;
    public strategy:string;
    public maxlen:number;
    public retry:number;
    public wrapuptime:number;
    public announce_frequency:number;
    public announce_holdtime:string;
    public ringinuser:string;

    constructor(data : Queue) 
    {
        if(data==null)
        {
            this.name="";
            this.strategy="roundrobin";
            this.maxlen=0;
            this.retry=0;
            this.wrapuptime=60;
            this.announce_frequency=90;
            this.announce_holdtime="yes";
            this.ringinuser="no";
        }
        else
        {
            this.name=data.name;
            this.strategy=data.strategy;
            this.maxlen=data.maxlen;
            this.retry=data.retry;
            this.wrapuptime=data.wrapuptime;
            this.announce_frequency=data.announce_frequency;
            this.announce_holdtime=data.announce_holdtime;
            this.ringinuser=data.ringinuser;
        }
    }
  }

