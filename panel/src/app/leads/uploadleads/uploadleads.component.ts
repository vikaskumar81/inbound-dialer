import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
import { FullComponent } from '../../layouts/full/full.component';
import { ButtonComponent } from '../../shared/button/button.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Upload, UploadForm } from '../model/model.class';
import { LeadsService } from '../leads.service';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';

@Component({
  selector: 'app-uploadleads',
  templateUrl: './uploadleads.component.html',
  styleUrls: ['./uploadleads.component.css']
})
export class UploadleadsComponent extends AppComponentFormClass <Upload, UploadForm>{
 
  constructor(protected data: LeadsService, protected fb: FormBuilder, protected router:Router) {
    super(data, fb, router);
    this.nav="/main/leads/uploadleads";
    this.cdata=new UploadForm(null);
   }
}