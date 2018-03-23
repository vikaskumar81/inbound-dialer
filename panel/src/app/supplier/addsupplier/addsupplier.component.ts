import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { SupplierForm } from '../model/model.class';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

  supplierdata = new SupplierForm();

  constructor(private supdata: SupplierService, private fb: FormBuilder) { }

  ngOnInit()
  {
    
  }


  onSubmit() {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.supplierdata));
 
  }

}