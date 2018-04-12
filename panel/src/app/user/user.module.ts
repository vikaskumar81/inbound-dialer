import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { User, HTTPUser, UserForm } from './model/model.class';
import { DemoMaterialModule} from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { UserComponent } from './user/user.component';

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
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [AdduserComponent, EdituserComponent, ListuserComponent, UserComponent],
  providers: [UserService]
})

export class UserModule { }
