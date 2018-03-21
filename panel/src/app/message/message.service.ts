import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Message } from './model/model.class';
import { Option } from '../shared/model/model.class';
import { APIURL } from '../app.routing';

@Injectable()
export class MessageService {

  private appmod="message/";
  private data:Message;

  constructor(private http : HttpClient) { }

  public set Data(v : Message) {
    this.data = v;
  }
  
  public get Data() : Message {
    return this.data;
  }

  public getMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(APIURL+this.appmod);
  }

  saveMessage(data:Message)
  {
    this.http.post(APIURL, data);
  }

  public detailMessage(key:Number):Observable<Message>
  {
    return this.http.get<Message>(APIURL+this.appmod+key);
  }

  public updateMessage(data:Message, key:Number)
  {
    this.http.put(APIURL+this.appmod+key, data);
  }

  public deleteMessage(key:Number)
  {
    this.http.delete(APIURL+this.appmod+key);
  }

}
