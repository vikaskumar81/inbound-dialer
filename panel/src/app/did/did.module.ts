import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DidRoutingModule } from './did-routing.module';
import { ListDidComponent } from './list-did/list-did.component';
import { AddDidComponent } from './add-did/add-did.component';
import { UploadDidComponent } from './upload-did/upload-did.component';

@NgModule({
  imports: [
    CommonModule,
    DidRoutingModule
  ],
  declarations: [ListDidComponent, AddDidComponent, UploadDidComponent]
})
export class DidModule { }
