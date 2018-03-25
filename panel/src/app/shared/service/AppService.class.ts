import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { APIURL } from '../../app.routing';
import { Option } from '../model/model.class';

export class AppService<T> {
    protected appmod : string;
    protected data : T;
    protected action : string;
  
    constructor(protected http : HttpClient) { }

    public get Action() : string {
      return this.action
    }
    
    public set Action(v : string) {
      this.action = v;
    }
  
    public set Data(v : T) {
      this.data = v;
    }
    
    public get Data() : T {
      return this.data;
    }

    public getOption(data:string):Observable<Option[]>{
        return this.http.get<Option[]>(APIURL+"option/"+data+"/");
      }
  
    public getService(): Observable<T[]> {
      return this.http.get<T[]>(APIURL+this.appmod);
    }
  
    public saveService(data:any): Observable<string>
    {
      return this.http.post<string>(APIURL+this.appmod, {"data":data},{ headers: {"Content-Type": "application/json"}, params: {"data": data} });
    }
  
    public detailService(key:number):Observable<T>
    {
      return this.http.get<T>(APIURL+this.appmod+key);
    }
  
    public statusService(data:any, key:number): Observable<string>
    {
      return this.http.post<string>(APIURL+this.appmod+key, {"data":data, "id":key}, { headers: {"Content-Type": "application/json"}, params: data });
    }
  
    public updateService(data:any, key:number): Observable<string>
    {
      return this.http.put<string>(APIURL+this.appmod+key, {"data":data, "id":key}, { headers: {"Content-Type": "application/json"}, params: data });
    }
  
    public deleteService(key:number)
    {
      this.http.delete(APIURL+this.appmod+key);
    }
  }