import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponentList.class';
import { User } from '../model/model.class';

import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';

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
