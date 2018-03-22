import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueRoutes } from './queue-routing.module';
import { AddqueueComponent } from './addqueue/addqueue.component';
import { EditqueueComponent } from './editqueue/editqueue.component';
import { ListqueueComponent } from './listqueue/listqueue.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QueueRoutes),
  ],
  declarations: [AddqueueComponent, EditqueueComponent, ListqueueComponent]
})
export class QueueModule { }
