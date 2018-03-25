import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDidComponent } from './add-did/add-did.component';
import { UploadDidComponent } from './upload-did/upload-did.component';
import { ListDidComponent } from './list-did/list-did.component';

export const DidRoutes: Routes = [{ 
  path: '',
  children: [{
    path: 'adddid', 
    component: AddDidComponent
  },{
    path: 'uploaddid', 
    component: UploadDidComponent
  },{
    path: 'listdid', 
    component: ListDidComponent
  }]
}];
