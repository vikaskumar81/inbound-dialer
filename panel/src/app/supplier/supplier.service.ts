import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Supplier } from './model/model.class';
import { AppService } from '../shared/service/AppService.class';

@Injectable()
export class SupplierService extends AppService<Supplier>{
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="supplier/";
  }
}
