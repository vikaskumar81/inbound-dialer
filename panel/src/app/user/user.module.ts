import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { User, HTTPUser, UserForm } from './model/model.class';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [AdduserComponent, EdituserComponent, ListuserComponent],
  providers: [UserService]
})

export class UserModule { }
