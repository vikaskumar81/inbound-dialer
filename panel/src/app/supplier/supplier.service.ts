import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Supplier } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';

@Injectable()
export class SupplierService {
  private appmod="supplier/";
  private data:Supplier;

  constructor(private http : HttpClient) { }

  public set Data(v : Supplier) {
    this.data = v;
  }
  
  public get Data() : Supplier {
    return this.data;
  }

  public getSupplier(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(APIURL+this.appmod);
  }

  saveSupplier(data:Supplier)
  {
    this.http.post(APIURL, data);
  }

  public detailSupplier(key:Number):Observable<Supplier>
  {
    return this.http.get<Supplier>(APIURL+this.appmod+key);
  }

  public updateSupplier(data:Supplier, key:Number)
  {
    this.http.put(APIURL+this.appmod+key, data);
  }

  public deleteSupplier(key:Number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }

}
