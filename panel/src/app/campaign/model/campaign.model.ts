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

export interface HTTPCampaign
{
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
  id_provider?:number,
  id_message?:number
}

export class CampaignForm implements HTTPCampaign {
  public name: string;
  public description?: string;
  public startdate?: Date;
  public starthr?: number;
  public startmin?: number;
  public enddate?: Date;
  public endhr?: number;
  public endmin?: number;
  public cid?:string;
  public ringtime?:number;
  public answertime?:number;
  public channel?:number;
  public ppm?:number;
  public status?:number;
  public weekdays?:string;
  public id_message?:number;
  public id_provider?:number;
  
  constructor(data:Campaign) {
    if(data==null)
    {
      this.name="";
      this.description="";
      this.startdate=new Date();
      this.starthr=0;
      this.startmin=0;
      this.enddate=new Date();
      this.endhr=23;
      this.endmin=59;
      this.cid="";
      this.ringtime=0;
      this.answertime=0;
      this.channel=0;
      this.ppm=0;
      this.status=0;
      this.weekdays="";
      this.id_message=-1;
      this.id_provider=-1;
    }
    else
    {
      this.name=data.name;
      this.description=data.description;
      this.startdate=data.startdate;
      this.starthr=data.starthr;
      this.startmin=data.startmin;
      this.enddate=data.enddate;
      this.endhr=data.endhr;
      this.endmin=data.endmin;
      this.cid=data.cid;
      this.ringtime=data.ringtime;
      this.answertime=data.answertime;
      this.channel=data.channel;
      this.ppm=data.ppm;
      this.status=data.status;
      this.weekdays=data.weekdays;
      this.id_message=this.id_message;
      this.id_provider=this.id_provider;
    }
  }
}