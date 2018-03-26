import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ExtensionService } from '../extension.service';
import { ExtensionForm, Extension } from '../model/model.class';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { Router } from '@angular/router';
import { MatSelect } from '@angular/material';
import { Input } from '@angular/core';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-addextension',
  templateUrl: './addextension.component.html',
  styleUrls: ['./addextension.component.css']
})
export class AddextensionComponent extends AppComponentFormClass<Extension, ExtensionForm> {

  @Input() label:string;
  constructor(protected data: ExtensionService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='/main/extension/listextension';
    
  }
}