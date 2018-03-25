import { Injectable } from '@angular/core';
import { AppService } from '../shared/service/AppService.class';
import { Queue } from './model/model.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueueService extends AppService<Queue> {
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="queue/";
  }
}
