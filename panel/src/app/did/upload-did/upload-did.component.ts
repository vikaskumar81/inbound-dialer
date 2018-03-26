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
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { MatSelect } from '@angular/material';


@Component({
  selector: 'app-upload-did',
  templateUrl: './upload-did.component.html',
  styleUrls: ['./upload-did.component.css']
})
export class UploadDidComponent  extends AppComponentFormClass<DID, DIDForm> {
  
  constructor(protected data: DidService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='/main/did/list-did';
    
  }
}