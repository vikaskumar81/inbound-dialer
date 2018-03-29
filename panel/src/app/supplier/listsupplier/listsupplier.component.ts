import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { Supplier,SupplierForm} from '../model/model.class';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';

@Component({
  selector: 'app-listsupplier',
  templateUrl: './listsupplier.component.html',
  styleUrls: ['./listsupplier.component.css']
})

export class ListsupplierComponent extends AppComponentClass<Supplier, SupplierForm> {
  constructor(protected data: SupplierService, protected router: Router) 
  {
    super(data, router);
    this.displayedColumns = ['name','ipaddr','prefix','actions'];
    this.editnav="/main/supplier/editsupplier";
    this.deletenav="/main/supplier/listsupplier";
  }
}