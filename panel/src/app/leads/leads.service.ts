import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Upload } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';

@Injectable()
export class LeadsService {
  private appmod="leads/";
  private data:Upload;

  constructor(private http : HttpClient) { }

  public set Data(v : Upload) {
    this.data = v;
  }
  
  public get Data() : Upload {
    return this.data;
  }

  public getUpload(): Observable<Upload[]> {
    return this.http.get<Upload[]>(APIURL+this.appmod);
  }

  saveUpload(data:Upload)
  {
    this.http.post(APIURL, data);
  }

  public detailUpload(key:Number):Observable<Upload>
  {
    return this.http.get<Upload>(APIURL+this.appmod+key);
  }

  public updateUpload(data:Upload, key:Number)
  {
    this.http.put(APIURL+this.appmod+key, data);
  }

  public deleteUpload(key:Number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }
}
