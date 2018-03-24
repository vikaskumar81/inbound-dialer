import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
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

  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;

  campaigndata = new CampaignForm(null);

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
  }

  onSubmit()
  {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.campaigndata));
  }
}