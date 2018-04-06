import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Upload, UploadForm } from '../model/model.class';
import { LeadsService } from '../leads.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listleads',
  templateUrl: './listleads.component.html',
  styleUrls: ['./listleads.component.css']
})
export class ListleadsComponent extends AppComponentClass<Upload, UploadForm> {

  constructor(protected data: LeadsService, protected router: Router) { 
    super(data, router);
    this.displayedColumns = ["filename", "leads", "dialed", "answered", "noanswer","busy","failed","conjestion","duration","actions"];
   
   // this.deletenav="/main/leads/listleads";
  }

 
}