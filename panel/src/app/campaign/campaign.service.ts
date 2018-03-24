import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Campaign, CampaignForm } from './model/campaign.model';
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

  public saveCampaign(data:any): Observable<string>
  {
    return this.http.post<string>(APIURL+this.appmod, {"data":data},{ headers: {"Content-Type": "application/json"}, params: {"data": data} });
  }

  public detailCampaign(key:number):Observable<Campaign>
  {
    return this.http.get<Campaign>(APIURL+this.appmod+key);
  }

  public updateCampaign(data:any, key:number): Observable<string>
  {
    return this.http.put<string>(APIURL+this.appmod+key, {"data":data, "id":key}, { headers: {"Content-Type": "application/json"}, params: data });
  }

  public deleteCampaign(key:number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }
}