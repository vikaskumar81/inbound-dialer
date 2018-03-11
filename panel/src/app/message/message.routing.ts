import { Routes } from '@angular/router';

import { AddmessageComponent } from './addmessage/addmessage.component';
import { EditmessageComponent } from './editmessage/editmessage.component';
import { ListmessageComponent } from './listmessage/listmessage.component';

export const MessageRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'addmessage', 
      component: AddmessageComponent
    },{
      path: 'editmessage', 
      component: EditmessageComponent
    },{
      path: 'listmessage', 
      component: ListmessageComponent
    }]
  }
];