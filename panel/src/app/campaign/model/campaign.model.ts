export interface Campaign
{
  id: number,
  name: string,
  description: string,
  status: number,
  startdate: Date,
  enddate: Date,
  starthr: string,
  endhr: string,
  weekdays: string,
  filename: string,
  cid: string,
  ringtime: number,
  answertime: number,
  channel: number,
  ppm: number,
  provider: string
}
