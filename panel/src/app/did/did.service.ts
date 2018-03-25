import { Injectable } from '@angular/core';
import { AppService } from '../shared/service/AppService.class';
import { HttpClient }   from '@angular/common/http';
import { DID } from './model/model.class';

@Injectable()
export class DidService extends AppService<DID> {
  constructor(protected http : HttpClient) {
    super(http);
    this.appmod="did/";
  }
}
