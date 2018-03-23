import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageRoutes } from './message.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { EditmessageComponent } from './editmessage/editmessage.component';
import { ListmessageComponent } from './listmessage/listmessage.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule, 
    ChartsModule,  
    RouterModule.forChild(MessageRoutes)
  ],
  declarations: [ AddmessageComponent, EditmessageComponent, ListmessageComponent],
  providers: [MessageService]
})


export class MessageModule {
       
    
}
