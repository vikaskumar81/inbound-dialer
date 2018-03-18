import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutes } from './home.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    DemoMaterialModule,
    FlexLayoutModule,
    SharedModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [ DashboardComponent]
})

export class HomeModule {
  
}
