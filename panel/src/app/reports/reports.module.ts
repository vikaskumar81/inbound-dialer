import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReportsRoutes } from './reports.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CalldetailsComponent } from './calldetails/calldetails.component';
import { CurrentcallsComponent } from './currentcalls/currentcalls.component';
import { ReportsService } from './reports.service';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(ReportsRoutes)
    
  ],
  declarations: [ CalldetailsComponent, CurrentcallsComponent],
  providers:[ReportsService]
})

export class ReportsModule {
       
    
}
