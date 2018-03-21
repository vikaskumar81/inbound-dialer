import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../model/campaign.model';
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

  constructor(private cpdata: CampaignService, private fb: FormBuilder) { }

  ngOnInit() {
    this.row=this.cpdata.Data;
    console.log(this.row);

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
}
