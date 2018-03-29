import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { DIDForm , DID} from '../model/model.class';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { DidService } from '../did.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-did',
  templateUrl: './list-did.component.html',
  styleUrls: ['./list-did.component.css']
})
export class ListDidComponent extends AppComponentClass<DID, DIDForm> {

  constructor(protected data: DidService, protected router: Router) 
  { 
    super(data, router);
    this.displayedColumns = ['number','idsupplier','actions'];
    
    this.deletenav="/main/did/didlist";
  }
 }
