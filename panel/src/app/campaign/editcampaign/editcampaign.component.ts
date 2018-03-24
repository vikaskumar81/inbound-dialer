import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign, CampaignForm } from '../model/campaign.model';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  campaigndata :CampaignForm;
  updated:string;

  constructor(private cpdata: CampaignService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() 
  {
    this.campaigndata=new CampaignForm(this.cpdata.Data);
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

  onSubmit()
  {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.campaigndata));
    this.cpdata.updateService(JSON.stringify(this.campaigndata), this.cpdata.Data.id).subscribe( data => this.updated=data);
    this.router.navigate ( [ '/main/campaign/listcampaign' ] );
  }
}
