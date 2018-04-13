import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { DidService } from '../did.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { DIDForm , DID} from '../model/model.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { MatSelect , MatSnackBar } from '@angular/material';





@Component({
  selector: 'app-adddid',
  templateUrl: './add-did.component.html',
  styleUrls: ['./add-did.component.css']
})
export class AddDidComponent extends AppComponentClass<DID, DIDForm> {

  supplier : Option[];
  foundsupplier : boolean;
  customer : Option[];
  foundcustomer : boolean;
  queue: Option[];
  foundqueue : boolean;
 
  constructor(protected data: DidService, protected router: Router,protected fb: FormBuilder, protected msg: MatSnackBar) {
    super(data, router,fb , msg);
    this.nav='/main/did/didlist';
    this.cdata=new DIDForm(null);
  }

  ngOnInit()
  {
    super.ngOnInit();
    
    this.data.getSupplier().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundsupplier=true;
          this.supplier=data;
         
        }
    });

    this.data.getCustomer().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundcustomer=true;
          this.customer=data;
          console.log(data);
        }
    });
    this.data.getQueue().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundqueue=true;
          this.queue=data;
          console.log(data);
        }
    });
  }
}