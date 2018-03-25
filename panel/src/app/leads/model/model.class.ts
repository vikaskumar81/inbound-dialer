export interface Upload
{
    id:number,
    id_campaign:number,
    campaign:string,
    filename:string,
    leads:number,
    dialed:number,
    answered:number,
    noanswer:number,
    busy:number,
    failed:number,
    conjestion:number,
    duration:number
}

export interface HTTPUpload
{
    filename:string,
    id_campaign:number,
}

export class UploadForm implements HTTPUpload
{
    public filename:string;
    public id_campaign:number;

    constructor(data : Upload)
    {
        if(data==null)
        {
            this.filename="";
            this.id_campaign=-1;
        }
        else
        {
            this.filename=data.filename;
            this.id_campaign=data.id_campaign;
        }
    }
}