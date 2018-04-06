import { Routes } from '@angular/router';

import { ListleadsComponent } from './listleads/listleads.component';
import { UploadleadsComponent } from './uploadleads/uploadleads.component';
import { LeadsComponent } from './leads/leads.component';

export const LeadsRoutes: Routes = [
  { 
    path: '',
    children: [{
      path: 'listleads', 
      component: ListleadsComponent
    },
    {
      path: '', 
      component: LeadsComponent
    },{
      path: 'uploadleads', 
      component: UploadleadsComponent
    }]
  }
];