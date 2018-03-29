import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '../shared/shared.module';
import { DidRoutes } from './did-routing.module';
import { AddDidComponent } from './add-did/add-did.component';
import { UploadDidComponent } from './upload-did/upload-did.component';
import { ListDidComponent } from './list-did/list-did.component';
import { RouterModule } from '@angular/router';
import { DidService } from './did.service';
import { HttpModule } from '@angular/http';

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
    RouterModule.forChild(DidRoutes),
    HttpModule
  ],
  declarations: [ListDidComponent, AddDidComponent, UploadDidComponent],
  providers: [DidService]
})
export class DidModule { }
