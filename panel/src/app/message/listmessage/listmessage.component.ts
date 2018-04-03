import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Message, MessageForm } from '../model/model.class';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listmessage',
  templateUrl: './listmessage.component.html',
  styleUrls: ['./listmessage.component.css']
})
export class ListmessageComponent extends AppComponentClass<Message, MessageForm> {
  
  constructor(protected data: MessageService, protected router: Router) { 
    super(data, router);
    this.displayedColumns = ['name','filename','actions'];
    //this.editnav="/main/message/editmessage";
    //this.deletenav="/main/message/listmessage";
  }
}