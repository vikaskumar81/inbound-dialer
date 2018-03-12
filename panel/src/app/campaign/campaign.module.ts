import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutes } from './campaign.routing';
import { AddcampaignComponent } from './addcampaign/addcampaign.component';
import { EditcampaignComponent } from './editcampaign/editcampaign.component';
import { ListcampaignComponent } from './listcampaign/listcampaign.component';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule, 
    SharedModule,
    RouterModule.forChild(CampaignRoutes)
  ],
  declarations: [ AddcampaignComponent, EditcampaignComponent, ListcampaignComponent]
})

export class CampaignModule {}
