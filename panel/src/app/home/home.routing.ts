import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const HomeRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: '', 
      component: DashboardComponent
    }, {
      path: 'dashboard', 
      component: DashboardComponent
    }]
  }
];