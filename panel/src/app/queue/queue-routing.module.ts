
import { Routes, RouterModule } from '@angular/router';
import { AddqueueComponent } from './addqueue/addqueue.component';
import { EditqueueComponent } from './editqueue/editqueue.component';
import { ListqueueComponent } from './listqueue/listqueue.component';
import { QueueComponent } from './queue/queue.component';

export const QueueRoutes: Routes = [{ 
  path: '',
  component: QueueComponent
}];