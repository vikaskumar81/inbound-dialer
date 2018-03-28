import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { UserForm, User } from '../model/model.class';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { Router } from '@angular/router';
import { MatSelect } from '@angular/material';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent extends AppComponentFormClass<User, UserForm> {

 
  constructor(protected data: UserService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='/main/user/listuser';
    this.cdata=new UserForm(null);
  }
}