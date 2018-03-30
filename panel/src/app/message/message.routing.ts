import { Routes } from '@angular/router';

import { AddmessageComponent } from './addmessage/addmessage.component';
import { ListmessageComponent } from './listmessage/listmessage.component';
import { EditmessageComponent } from './editmessage/editmessage.component';
import { MessageComponent } from './message/message.component';

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
    },
    {
      path: '', 
      component: MessageComponent
    }]
  }
];