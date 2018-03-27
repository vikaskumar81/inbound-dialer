import { Injectable } from '@angular/core';
import { AppService } from '../shared/service/AppService.class';
import { HttpClient } from '@angular/common/http';
import { User, UserForm } from './model/model.class';
import { APIURL } from '../app.routing';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService extends AppService<User>{
  constructor(protected http:HttpClient) {
    super(http);
    this.appmod="user/";
   }
}
