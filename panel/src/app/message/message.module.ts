import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageRoutes } from './message.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { EditmessageComponent } from './editmessage/editmessage.component';
import { ListmessageComponent } from './listmessage/listmessage.component';
import { MessageService } from './message.service';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(MessageRoutes),
    FormsModule,
    QuillModule,  
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations: [ AddmessageComponent, EditmessageComponent, ListmessageComponent],
  providers: [MessageService]
})

export class MessageModule {
       
    
}
