import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { CampaignForm } from '../model/campaign.model';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.css']
})

export class AddcampaignComponent implements OnInit {
  options: FormGroup;
  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;
  hour =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  minutes =[];
  supoption: MatSelect;

  campaigndata = new CampaignForm();

  constructor(private cpdata: CampaignService, private fb: FormBuilder) { }

  ngOnInit()
  {
    this.cpdata.getSupplier().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundsupplier=true;
          this.supplier=data;
        }
    });

    this.cpdata.getMessage().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundmessage=true;
          this.message=data;
        }
    });
    
    for(var i=0; i<60; i++)
      this.minutes.push(i);
  }

  onSubmit()
  {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.campaigndata));
  }
}