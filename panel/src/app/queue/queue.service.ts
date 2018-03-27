import { Injectable } from '@angular/core';
import { AppService } from '../shared/service/AppService.class';
import { Queue, QueueForm } from './model/model.class';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../app.routing';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Option } from '../shared/model/model.class';

@Injectable()
export class QueueService extends AppService<Queue> {
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="queue/";
  }
}
