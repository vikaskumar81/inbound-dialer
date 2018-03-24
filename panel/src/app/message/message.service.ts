import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Message } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';
import { AppService } from '../shared/service/AppService.class';
import { asPureExpressionData } from '@angular/core/src/view';

@Injectable()
export class MessageService extends AppService<Message>{
  private action:string;
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="message/";
  }
  
  public get Action() : string {
    return this.action
  }
  
  public set Action(v : string) {
    this.action = v;
  }
  
}
