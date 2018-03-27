import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { SupplierForm, Supplier } from '../model/model.class';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { AddsupplierComponent } from '../addsupplier/addsupplier.component';



@Component({
  selector: 'app-editsupplier',
  templateUrl: './editsupplier.component.html',
  styleUrls: ['./editsupplier.component.css']
})
export class EditsupplierComponent extends 
AppComponentFormClass<Supplier,SupplierForm> {

  constructor(protected data: SupplierService, protected fb: FormBuilder, protected router:Router) 
  {
    super(data, fb, router);
    this.cdata= new SupplierForm(this.data.Data);
    this.nav="/main/supplier/listsupplier";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() {
  }
}
