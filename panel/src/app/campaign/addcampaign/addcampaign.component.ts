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
import { Router } from '@angular/router';

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
  insertdata:string;

  campaigndata = new CampaignForm(null);

  constructor(private cpdata: CampaignService, private fb: FormBuilder, private router:Router) { }

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
    this.cpdata.saveService(JSON.stringify(this.campaigndata)).subscribe( data => this.insertdata=data);
    this.router.navigate ( [ '/main/campaign/listcampaign' ] );
  }
}