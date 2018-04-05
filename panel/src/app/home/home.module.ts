import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutes } from './home.routing';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    DemoMaterialModule,
    FlexLayoutModule,
    SharedModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(HomeRoutes),
    Ng2GoogleChartsModule
  ],
  declarations: [ DashboardComponent],
  providers : [ HomeService ]
})

export class HomeModule {
  
}
