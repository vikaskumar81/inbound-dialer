import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserForm, User } from '../model/model.class';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { AdduserComponent } from '../adduser/adduser.component';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent extends 
AppComponentFormClass<User,UserForm> {

  constructor(protected data: UserService, protected fb: FormBuilder, protected router:Router) 
  {
    super(data, fb, router);
    this.cdata= new UserForm(this.data.Data);
    this.nav="/main/user/listuser";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() {
  }
}
