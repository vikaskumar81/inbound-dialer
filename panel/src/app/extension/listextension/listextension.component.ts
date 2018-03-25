import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Extension } from '../model/model.class';
import { ExtensionService } from '../extension.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listextension',
  templateUrl: './listextension.component.html',
  styleUrls: ['./listextension.component.css']
})
export class ListextensionComponent extends AppComponentListClass<Extension> {
  constructor(protected data: ExtensionService, protected router: Router) {
    super(data, router);
    this.displayedColumns = ['username','password','callerid','extension','host'];
   }  
}