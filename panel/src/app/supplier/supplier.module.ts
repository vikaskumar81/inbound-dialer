import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupplierRoutes } from './supplier.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { ListsupplierComponent } from './listsupplier/listsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';
import { SupplierService } from './supplier.service';
import { SupplierComponent } from './supplier/supplier.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    FormsModule,
    QuillModule,  
    ReactiveFormsModule,
    FileUploadModule,
    SharedModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  declarations: [ ListsupplierComponent, AddsupplierComponent, EditsupplierComponent, SupplierComponent],
  providers: [SupplierService]
})

export class SupplierModule {
       
    
}
