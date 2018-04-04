
import { Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserComponent } from './user/user.component';

export const UserRoutes: Routes = [{ 
  path: '',
  children: [{
    path: 'adduser', 
    component: AdduserComponent
  },{
    path: 'edituser', 
    component: EdituserComponent
  },{
    path: '', 
    component: UserComponent
  },{
    path: 'listuser', 
    component: ListuserComponent
  }]
}];