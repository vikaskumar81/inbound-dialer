
import { Routes, RouterModule } from '@angular/router';
import { AddqueueComponent } from './addqueue/addqueue.component';
import { EditqueueComponent } from './editqueue/editqueue.component';
import { ListqueueComponent } from './listqueue/listqueue.component';
import { QueueComponent } from './queue/queue.component';

export const QueueRoutes: Routes = [{ 
  path: '',
  children: [{
    path: 'addqueue', 
    component: AddqueueComponent
  },{
    path: 'editqueue', 
    component: EditqueueComponent
  },{
    path: 'listqueue', 
    component: ListqueueComponent
  },{
    path:'',
    component: QueueComponent
  }]
}];