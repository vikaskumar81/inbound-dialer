import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Supplier } from '../model/model.class';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsupplier',
  templateUrl: './listsupplier.component.html',
  styleUrls: ['./listsupplier.component.css']
})
export class ListsupplierComponent implements OnInit {
  displayedColumns = ['name','ipaddress','prefix','actions'];
  dataSource = new SupplierDataSource(this.data);
  detail : FullComponent;
  constructor(private data: SupplierService, private router: Router) { }
 
  ngOnInit() {}
  
  
}

export class SupplierDataSource extends DataSource<any> {
  constructor(private data: SupplierService) {
    super();
  }
  
  connect(): Observable<Supplier[]> {
    return this.data.getSupplier();
  }

  disconnect() {}
}