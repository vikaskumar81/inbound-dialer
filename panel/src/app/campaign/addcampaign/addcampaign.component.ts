import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { CampaignForm, Campaign } from '../model/campaign.model';
import { MatSelect } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';

@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.css']
})

export class AddcampaignComponent extends AppComponentFormClass <Campaign, CampaignForm>{

  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;

  constructor(protected data: CampaignService, protected fb: FormBuilder, protected router:Router) {
    super(data, fb, router);
    this.nav="/main/campaign/listcampaign";
    this.cdata=new CampaignForm(null);
   }

  ngOnInit()
  {
    super.ngOnInit();
    
    this.data.getSupplier().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundsupplier=true;
          this.supplier=data;
        }
    });

    this.data.getMessage().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundmessage=true;
          this.message=data;
        }
    });
  }
}