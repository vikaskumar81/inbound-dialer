import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Message } from '../model/model.class';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmessage',
  templateUrl: './listmessage.component.html',
  styleUrls: ['./listmessage.component.css']
})
export class ListmessageComponent implements OnInit {
  displayedColumns = ['name','filename','actions'];
  dataSource = new MessageDataSource(this.data);

  constructor(private data: MessageService, private router: Router) { }
 
  ngOnInit() {}
  
  
}

export class MessageDataSource extends DataSource<any> {
  constructor(private data: MessageService) {
    super();
  }
  
  connect(): Observable<Message[]> {
    return this.data.getMessage();
  }

  disconnect() {}
}