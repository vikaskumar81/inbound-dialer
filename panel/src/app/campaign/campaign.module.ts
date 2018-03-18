import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutes } from './campaign.routing';
import { AddcampaignComponent } from './addcampaign/addcampaign.component';
import { EditcampaignComponent } from './editcampaign/editcampaign.component';
import { ListcampaignComponent } from './listcampaign/listcampaign.component';
import { CampaignService } from './campaign.service';
import { Campaign } from './model/campaign.model';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule, 
    SharedModule,
    RouterModule.forChild(CampaignRoutes),
    FormsModule,
    QuillModule,  
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [CampaignService],
  declarations: [ AddcampaignComponent, EditcampaignComponent, ListcampaignComponent]
})

export class CampaignModule {}
