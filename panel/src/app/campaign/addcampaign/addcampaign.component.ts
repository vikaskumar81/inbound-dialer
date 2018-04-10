import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { CampaignForm, Campaign } from '../model/campaign.model';
import { MatSelect, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.css'],
})

export class AddcampaignComponent extends AppComponentClass <Campaign, CampaignForm>{
  message : Option[];
  foundmessage: boolean;
  supplier : Option[];
  foundsupplier : boolean;

  constructor(protected data: CampaignService, protected router:Router,protected fb: FormBuilder, protected msg: MatSnackBar) {
    super(data,router, fb, msg);
    this.nav="/main/campaign/";
    //this.cdata=new CampaignForm(null);
   }

  ngOnInit()
  {
    super.ngOnInit();
    this.data.solution.subscribe(res=>{
      this.cdata=new CampaignForm(res);
      this.keyfield=res.id;
    });
    
    this.data.getSupplier().subscribe(
      res => {
        if(res.length>0)
        {
          this.foundsupplier=true;
          this.supplier=res;
          console.log(res);
         
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