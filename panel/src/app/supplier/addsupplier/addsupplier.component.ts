import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { SupplierForm, Supplier } from '../model/model.class';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent extends AppComponentClass<Supplier, SupplierForm> {

  constructor(protected data: SupplierService,  protected router: Router, protected fb: FormBuilder) { 
    super(data, router, fb);
    this.nav='main/supplier/listsupplier';
    this.cdata=new SupplierForm(null);
  }
}