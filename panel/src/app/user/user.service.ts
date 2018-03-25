import { Injectable } from '@angular/core';
import { AppService } from '../shared/service/AppService.class';
import { HttpClient } from '@angular/common/http';
import { User } from './model/model.class';

@Injectable()
export class UserService extends AppService<User>{
  constructor(protected http:HttpClient) {
    super(http);
    this.appmod="users/";
   }
}
