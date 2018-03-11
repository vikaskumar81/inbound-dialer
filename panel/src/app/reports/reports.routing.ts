import { Routes } from '@angular/router';

import { CalldetailsComponent } from './calldetails/calldetails.component';
import { CurrentcallsComponent } from './currentcalls/currentcalls.component';

export const ReportsRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'currentcalls', 
      component: CurrentcallsComponent
    },{
      path: 'calldetails', 
      component: CalldetailsComponent
    }]
  }
];