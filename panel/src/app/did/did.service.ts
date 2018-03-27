import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DID, DIDForm} from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';
import {AppService} from '../shared/service/AppService.class';

@Injectable()
export class DidService extends AppService<DID> {
  constructor(protected http : HttpClient) {
    super(http);
    this.appmod="did/";
  }
}
