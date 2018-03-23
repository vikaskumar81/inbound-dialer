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

@Component({
  selector: 'app-listextension',
  templateUrl: './listextension.component.html',
  styleUrls: ['./listextension.component.css']
})
export class ListextensionComponent implements OnInit {

  displayedColumns = ['username','password','callerid','extension','host'];
  dataSource = new ExtensionDataSource(this.data);
  detail : FullComponent;
  constructor(private data: ExtensionService, private router: Router) { }
 
  ngOnInit() {}
  
  
}

export class ExtensionDataSource extends DataSource<any> {
  constructor(private data: ExtensionService) {
    super();
  }
  
  connect(): Observable<Extension[]> {
    return this.data.getExtension();
  }

  disconnect() {}
}
