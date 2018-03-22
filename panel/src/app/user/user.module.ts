import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [AdduserComponent, EdituserComponent, ListuserComponent]
})
export class UserModule { }
