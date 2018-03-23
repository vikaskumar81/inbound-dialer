import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageRoutes } from './message.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { EditmessageComponent } from './editmessage/editmessage.component';
import { ListmessageComponent } from './listmessage/listmessage.component';
import { MessageService } from './message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forChild(MessageRoutes)
  ],
  declarations: [ AddmessageComponent, EditmessageComponent, ListmessageComponent],
  providers: [MessageService]
})


export class MessageModule {
       
    
}
