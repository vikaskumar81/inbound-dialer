import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Campaign } from './model/campaign.model';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';
@Injectable()
export class CampaignService {
  private appmod="campaign/";
  private data:Campaign;

  constructor(private http : HttpClient) { }

  public set Data(v : Campaign) {
    this.data = v;
  }
  
  public get Data() : Campaign {
    return this.data;
  }

  public getSupplier():Observable<Option[]>{
    return this.http.get<Option[]>(APIURL+"option/supplier/");
  }
  
  public getMessage():Observable<Option[]>{
    return this.http.get<Option[]>(APIURL+"option/message/");
  }

  public getCampaign(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(APIURL+this.appmod);
  }

  saveCampaign(data:Campaign)
  {
    this.http.post(APIURL, data);
  }

  public detailCampaign(key:Number):Observable<Campaign>
  {
    return this.http.get<Campaign>(APIURL+this.appmod+key);
  }

  public updateCampaign(data:Campaign, key:Number)
  {
    this.http.put(APIURL+this.appmod+key, data);
  }

  public deleteCampaign(key:Number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }
}