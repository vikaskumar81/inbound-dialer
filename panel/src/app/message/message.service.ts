import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Message, MessageForm } from './model/model.class';
import { AppService } from '../shared/service/AppService.class';
import { APIURL } from '../app.routing';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Option } from '../shared/model/model.class';


@Injectable()
export class MessageService extends AppService<Message>{
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="message/";
  }  
}
