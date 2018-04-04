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

import { ExtenstionRoutes } from './extension-routing.module';
import { AddextensionComponent } from './addextension/addextension.component';
import { EditextensionComponent } from './editextension/editextension.component';
import { ListextensionComponent } from './listextension/listextension.component';
import { RouterModule } from '@angular/router';
import { ExtensionService } from './extension.service';
import { ExtensionComponent } from './extension/extension.component';

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
    RouterModule.forChild(ExtenstionRoutes),
  ],
  declarations: [AddextensionComponent, EditextensionComponent, ListextensionComponent, ExtensionComponent],
  providers: [ExtensionService]
})
export class ExtensionModule { }
