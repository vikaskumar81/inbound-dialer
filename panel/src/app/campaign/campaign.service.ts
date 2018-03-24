import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Campaign, CampaignForm } from './model/campaign.model';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';
import {AppService} from '../shared/service/AppService.class';
@Injectable()
export class CampaignService extends AppService<Campaign>{
  constructor(protected http : HttpClient) {
    super(http);
    this.appmod="campaign/";
   }

  public getSupplier():Observable<Option[]>{
    return super.getOption("supplier");
  }
  
  public getMessage():Observable<Option[]>{
    return super.getOption("message");
  }
}