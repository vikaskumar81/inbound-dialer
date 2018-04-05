import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { APIURL } from '../../app.routing';
import { Option } from '../model/model.class';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { serializePath } from '@angular/router/src/url_tree';

export class AppService<T> {
    protected appmod : string;
    protected data : T;
    protected action : string;
    protected service_data = new BehaviorSubject<T>(null);
    public solution= this.service_data.asObservable();
    protected label: string;
    public frm_label= new BehaviorSubject<string>("Add New");
      
    constructor(protected http : HttpClient) { }

    public get Action() : string {
      return this.action
    }
    
    public set Action(v : string) {
      this.action = v;
    }
  
    public set Data(v : T) {
      this.data = v;
      this.service_data.next(v);
    }
    
    public get Data() : T {
      return this.data;
    }

    changelabel(lbl:string)
    {
      this.frm_label.next(lbl);
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
  
    public deleteService(key:number): Observable<string>
    {
      return this.http.delete<string>(APIURL+this.appmod+key, { headers: {"Content-Type": "application/json"}});
    }
  }