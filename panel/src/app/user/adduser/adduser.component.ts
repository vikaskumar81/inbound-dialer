import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { UserForm, User } from '../model/model.class';
import { Router } from '@angular/router';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelect, MatSnackBar } from '@angular/material';
import { AppComponentClass } from '../../shared/service/AppComponent.class';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent extends AppComponentClass<User, UserForm> {

 
  constructor(protected data: UserService, protected router: Router, protected fb: FormBuilder, protected msg: MatSnackBar) {
    super(data, router, fb , msg);
    //this.nav='/main/user/listuser';
    //this.cdata=new UserForm(null);
    this.nav='/main/user/';
  }
  ngOnInit() {
    super.ngOnInit();
    this.data.solution.subscribe(res=>{
        this.cdata=new UserForm(res);
    });
  }
}