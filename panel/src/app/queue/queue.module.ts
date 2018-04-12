import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from '../shared/shared.module';
import { AddqueueComponent } from './addqueue/addqueue.component';
import { ListqueueComponent } from './listqueue/listqueue.component';
import { QueueService } from './queue.service';
import { QueueRoutes } from './queue-routing.module';
import { QueueComponent } from './queue/queue.component';



@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule, 
    FormsModule,
    QuillModule,  
    ReactiveFormsModule,
    SharedModule,
    FileUploadModule,
    RouterModule.forChild(QueueRoutes),
  ],
  declarations: [AddqueueComponent, ListqueueComponent, QueueComponent],
  providers: [QueueService]
})
export class QueueModule { }
