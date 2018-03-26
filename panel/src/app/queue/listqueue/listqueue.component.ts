import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Queue } from '../model/model.class';
import { QueueService } from '../queue.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponentList.class';

@Component({
  selector: 'app-listqueue',
  templateUrl: './listqueue.component.html',
  styleUrls: ['./listqueue.component.css']
})
export class ListqueueComponent extends AppComponentListClass<Queue> {

  constructor(protected data: QueueService, protected router: Router) { 
    super(data, router);
    this.displayedColumns = ['name','strategy','maxlen','retry','wrapuptime','announce_frequency','announce_holdtime','ringinuser'];
  }

  Edit(row: Queue)
  {
    this.data.Data=row;
    console.log(row);
    this.data.Action="edit";
    this.router.navigate ( [ '/main/queue/editqueue' ] );
  }

  Delete(row : Queue)
  {
    this.data.Data=row;
    console.log(row);
  }
}