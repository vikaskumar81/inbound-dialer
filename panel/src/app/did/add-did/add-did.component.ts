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
import { MatSelect } from '@angular/material';



@Component({
  selector: 'app-adddid',
  templateUrl: './add-did.component.html',
  styleUrls: ['./add-did.component.css']
})
export class AddDidComponent extends AppComponentClass<DID, DIDForm> {
 
  constructor(protected data: DidService, protected router: Router,protected fb: FormBuilder) { 
    super(data, router,fb);
    this.nav='/main/did/didlist';
    this.cdata=new DIDForm(null);
  }
}