import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { SupplierForm, Supplier } from '../model/model.class';
import { AppComponentAddClass } from '../../shared/service/AppComponentAdd.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent extends AppComponentAddClass<Supplier, SupplierForm> {

  constructor(protected data: SupplierService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='main/supplier/listsupplier';
  }
}