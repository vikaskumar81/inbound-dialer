import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign, CampaignForm } from '../model/campaign.model';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css']
})

export class EditcampaignComponent extends 
AppComponentClass<Campaign,CampaignForm> {
  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;

  constructor(protected data: CampaignService, protected router:Router, protected fb: FormBuilder) 
  { 
    super(data, router,fb);
    this.cdata= new CampaignForm(this.data.Data);
    this.nav="/main/campaign/listcampaign";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() 
  {
    this.data.getSupplier().subscribe(
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

    this.data.getMessage().subscribe(
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
  }
}
