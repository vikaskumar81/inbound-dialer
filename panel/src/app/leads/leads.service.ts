import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Upload, UploadForm } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';
import {AppService} from '../shared/service/AppService.class';

@Injectable()
export class LeadsService extends AppService<Upload>{
  constructor(protected http : HttpClient) {
    super(http);
    this.appmod="leads/";
   }

   public getCampaign():Observable<Option[]>{
    return super.getOption("campaign");
  }
  
  
}
