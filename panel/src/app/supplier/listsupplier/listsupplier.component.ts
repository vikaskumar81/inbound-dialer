import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { Supplier } from '../model/model.class';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponentList.class';

@Component({
  selector: 'app-listsupplier',
  templateUrl: './listsupplier.component.html',
  styleUrls: ['./listsupplier.component.css']
})

export class ListsupplierComponent extends AppComponentListClass<Supplier> {
  constructor(protected data: SupplierService, protected router: Router) 
  {
    super(data, router);
    this.displayedColumns = ['name','ipaddress','prefix','actions'];
  }
}