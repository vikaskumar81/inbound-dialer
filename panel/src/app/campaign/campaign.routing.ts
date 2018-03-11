import { Routes } from '@angular/router';

import { AddcampaignComponent } from './addcampaign/addcampaign.component';
import { EditcampaignComponent } from './editcampaign/editcampaign.component';
import { ListcampaignComponent } from './listcampaign/listcampaign.component';

export const CampaignRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'addcampaign', 
      component: AddcampaignComponent
    },{
      path: 'editcampaign', 
      component: EditcampaignComponent
    },{
      path: 'listcampaign', 
      component: ListcampaignComponent
    }]
  }
];