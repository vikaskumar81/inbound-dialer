import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtenstionRoutes } from './extension-routing.module';
import { AddextensionComponent } from './addextension/addextension.component';
import { EditextensionComponent } from './editextension/editextension.component';
import { ListextensionComponent } from './listextension/listextension.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtenstionRoutes),
  ],
  declarations: [AddextensionComponent, EditextensionComponent, ListextensionComponent]
})
export class ExtensionModule { }
