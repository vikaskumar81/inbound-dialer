import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Extension, ExtensionForm } from '../model/model.class';
import { ExtensionService } from '../extension.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listextension',
  templateUrl: './listextension.component.html',
  styleUrls: ['./listextension.component.css']
})
export class ListextensionComponent extends AppComponentClass<Extension, ExtensionForm> {
  constructor(protected data: ExtensionService, protected router: Router) {
    super(data, router);
    this.displayedColumns = ['username','secret','callerid','exten','host','status','actions'];
    //this.editnav="/main/extension/editextension";
    //this.deletenav="/main/extension/listextension";
   }  
   
 
}