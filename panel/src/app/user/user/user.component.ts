import { Component, OnInit } from '@angular/core';
import { AdduserComponent } from '../adduser/adduser.component';
import { ListuserComponent } from '../listuser/listuser.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
