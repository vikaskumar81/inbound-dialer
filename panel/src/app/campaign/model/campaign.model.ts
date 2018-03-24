export interface Campaign
{
  id?: number,
  name?: string,
  description?: string,
  status?: number,
  startdate?: Date,
  enddate?: Date,
  starttime?: string,
  endtime?:string,
  starthr?: number,
  endhr?: number,
  startmin?: number,
  endmin?: number,
  weekdays?: string,
  filename?: string,
  cid?: string,
  ringtime?: number,
  answertime?: number,
  channel?: number,
  ppm?: number,
  provider?: string,
  message?: string,
  id_provider?:number,
  id_message?:number
}

export class CampaignForm implements Campaign {
  public id: number;
  public name: string;
  public description?: string;
  public starttime?: string;
  public startdate?: Date;
  public starthr?: number;
  public startmin?: number;
  public endtime?:string;
  public enddate?: Date;
  public endhr?: number;
  public endmin?: number;
  public provider?:string;
  public message?:string;
  public cid?:string;
  public ringtime?:number;
  public answertime?:number;
  public channel?:number;
  public ppm?:number;
  public status?:number;
  public weekdays?:string;
  public filename?:string;
  public id_message?:number;
  public id_provider?:number;
  constructor(data:Campaign) {
    if(data==null)
    {
      this.id=-1;
      this.name="";
      this.description="";
      this.startdate=new Date();
      this.starthr=0;
      this.startmin=0;
      this.enddate=new Date();
      this.endhr=23;
      this.endmin=59;
      this.provider="";
      this.message="";
      this.cid="";
      this.ringtime=0;
      this.answertime=0;
      this.channel=0;
      this.ppm=0;
      this.status=0;
      this.weekdays="";
      this.filename="";
      this.starttime="";
      this.endtime="";
      this.id_message=-1;
      this.id_provider=-1;
    }
    else
    {
      this.id=data.id;
      this.name=data.name;
      this.description=data.description;
      this.startdate=data.startdate;
      this.starthr=data.starthr;
      this.startmin=data.startmin;
      this.enddate=data.enddate;
      this.endhr=data.endhr;
      this.endmin=data.endmin;
      this.provider=data.provider;
      this.message=data.message;
      this.cid=data.cid;
      this.ringtime=data.ringtime;
      this.answertime=data.answertime;
      this.channel=data.channel;
      this.ppm=data.ppm;
      this.status=data.status;
      this.weekdays=data.weekdays;
      this.filename=data.filename;
      this.starttime=data.starttime;
      this.endtime=data.endtime;
      this.id_message=this.id_message;
      this.id_provider=this.id_provider;
    }
  }
}
