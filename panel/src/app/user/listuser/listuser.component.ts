import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { User,UserForm } from '../model/model.class';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent extends AppComponentClass<User, UserForm> 
{
  constructor(protected data : UserService, protected router: Router)
  {
    super(data, router);
    this.displayedColumns= ['username', 'password', 'company', 'contact', 'actions'];
    //this.editnav="/main/user/edituser";
   // this.deletenav="/main/user/listuser";
  }
}
