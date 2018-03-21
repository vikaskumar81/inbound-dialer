export interface Campaign
{
  id: number,
  name: string,
  description: string,
  status: number,
  startdate: Date,
  enddate: Date,
  starthr: number,
  endhr: number,
  startmin: number,
  endmin: number,
  weekdays: string,
  filename: string,
  cid: string,
  ringtime: number,
  answertime: number,
  channel: number,
  ppm: number,
  provider?: string,
  message?: string
}

export class CampaignForm {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public startdate?: Date,
    public starthr?: number,
    public startmin?: number,
    public enddate?: Date,
    public endhr?: number,
    public endmin?: number,
    public provider?:number,
    public message?:number,
    public cid?:string,
    public ringtime?:number,
    public answertime?:number,
    public channel?:number,
    public ppm?:number
  ) {}
}
