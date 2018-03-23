import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Extension } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';

@Injectable()
export class ExtensionService {
  private appmod="extension/";
  private data:Extension;

  constructor(private http : HttpClient) { }

  public set Data(v : Extension) {
    this.data = v;
  }
  
  public get Data() : Extension {
    return this.data;
  }

  public getExtension(): Observable<Extension[]> {
    return this.http.get<Extension[]>(APIURL+this.appmod);
  }

  saveExtension(data:Extension)
  {
    this.http.post(APIURL, data);
  }

  public detailExtension(key:Number):Observable<Extension>
  {
    return this.http.get<Extension>(APIURL+this.appmod+key);
  }

  public updateExtension(data:Extension, key:Number)
  {
    this.http.put(APIURL+this.appmod+key, data);
  }

  public deleteExtension(key:Number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }

}
