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

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(LeadsRoutes)
    
  ],
  declarations: [ ListleadsComponent, UploadleadsComponent],
  providers : [LeadsService]
})

export class LeadsModule {
       
    
}
