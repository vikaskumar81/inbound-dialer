import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponentList.class';
import { User } from '../model/model.class';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent extends AppComponentListClass<User> 
{
  constructor(protected data : UserService, protected router: Router)
  {
    super(data, router);
    this.displayedColumns= ['username', 'password', 'company', 'contact', 'actions'];
  }
}
