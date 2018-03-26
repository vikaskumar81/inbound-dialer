import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { QueueService } from '../queue.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { QueueForm, Queue } from '../model/model.class';
import { MatSelect } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';


@Component({
  selector: 'app-addqueue',
  templateUrl: './addqueue.component.html',
  styleUrls: ['./addqueue.component.css']
})
export class AddqueueComponent extends AppComponentFormClass<Queue, QueueForm> {
  constructor(protected data: QueueService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='/main/queue/listqueue';
    this.cdata=new QueueForm(null);
  }
}