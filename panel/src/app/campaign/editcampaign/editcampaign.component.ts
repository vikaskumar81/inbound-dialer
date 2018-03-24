import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign, CampaignForm } from '../model/campaign.model';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css']
})

export class EditcampaignComponent implements OnInit {
  row : Campaign;
  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;
  hour =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14',
  '15','16','17','18','19','20','21','22','23'];
  minutes =[];

  campaigndata = new CampaignForm();

  constructor(private cpdata: CampaignService, private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.campaigndata.name=this.cpdata.Data.name;
    this.campaigndata.answertime=this.cpdata.Data.answertime;
    this.campaigndata.ringtime=this.cpdata.Data.ringtime;
    this.campaigndata.ppm=this.cpdata.Data.ppm;
    this.campaigndata.cid=this.cpdata.Data.cid;
    this.campaigndata.channel=this.cpdata.Data.channel;
    this.campaigndata.startdate=this.cpdata.Data.startdate;
    this.campaigndata.starthr=this.cpdata.Data.starthr;
    this.campaigndata.startmin=this.cpdata.Data.startmin;
    console.log(this.campaigndata);

    this.cpdata.getSupplier().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundsupplier=true;
          this.supplier=data;
        }
      },
      error=>{
        console.log("Error in data");
      }
    );

    this.cpdata.getMessage().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundmessage=true;
          this.message=data;
        }
      },
      error =>{
        console.log("Error in data");
      }
    );
    
    for(var i=0; i<60; i++)
      this.minutes.push(i);
  }

  StartMinSelect(c1: Option):boolean
  {
    if(c1.value==this.cpdata.Data.startmin)
      return true;
    else
      return false;
  }
}
