import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent extends AppComponentListClass<UserService> 
{
  ngOnInit()
  {
    this.displayedColumns= ['username', 'password', 'company', 'contact', 'actions'];
    super.ngOnInit();
  }
}
