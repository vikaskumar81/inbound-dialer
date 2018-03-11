import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupplierRoutes } from './supplier.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { ListsupplierComponent } from './listsupplier/listsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(SupplierRoutes)
    
  ],
  declarations: [ ListsupplierComponent, AddsupplierComponent, EditsupplierComponent]
})

export class SupplierModule {
       
    
}
