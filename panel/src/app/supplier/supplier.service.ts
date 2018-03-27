import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Supplier, SupplierForm } from './model/model.class';
import { AppService } from '../shared/service/AppService.class';
import { APIURL } from '../app.routing';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class SupplierService extends AppService<Supplier>{
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="supplier/";
  }
}
