import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Queue,QueueForm } from '../model/model.class';
import { QueueService } from '../queue.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listqueue',
  templateUrl: './listqueue.component.html',
  styleUrls: ['./listqueue.component.css']
})
export class ListqueueComponent extends AppComponentClass<Queue, QueueForm> {

  constructor(protected data: QueueService, protected router: Router) { 
    super(data, router);
    this.displayedColumns = ['queue_name','strategy','maxlen','retry','extension','monitor_format','announce_holdtime','monitor_type','timeout','actions'];
    //this.editnav="/main/queue/editqueue";
    //this.deletenav="/main/queue/listqueue";
  }
}

 