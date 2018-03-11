import { Routes } from '@angular/router';

import { ListleadsComponent } from './listleads/listleads.component';
import { UploadleadsComponent } from './uploadleads/uploadleads.component';

export const LeadsRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: '', 
      component: ListleadsComponent
    },{
      path: 'listleads', 
      component: ListleadsComponent
    },{
      path: 'uploadleads', 
      component: UploadleadsComponent
    }]
  }
];