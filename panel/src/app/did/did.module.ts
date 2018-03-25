import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDidComponent } from './list-did/list-did.component';
import { AddDidComponent } from './add-did/add-did.component';
import { UploadDidComponent } from './upload-did/upload-did.component';
import { RouterModule } from '@angular/router';
import { DidRoutes } from './did-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DidRoutes),
  ],
  declarations: [ListDidComponent, AddDidComponent, UploadDidComponent]
})
export class DidModule { }
