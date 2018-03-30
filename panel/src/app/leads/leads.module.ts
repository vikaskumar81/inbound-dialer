import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeadsRoutes } from './leads.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { ListleadsComponent } from './listleads/listleads.component';
import { UploadleadsComponent } from './uploadleads/uploadleads.component';
import { LeadsService } from './leads.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    SharedModule,
    ChartsModule, 
    FormsModule,
    QuillModule,  
    ReactiveFormsModule,
    FileUploadModule, 
    RouterModule.forChild(LeadsRoutes),
    HttpModule    
  ],
  declarations: [ ListleadsComponent, UploadleadsComponent],
  providers : [LeadsService]
})

export class LeadsModule {
       
    
}
