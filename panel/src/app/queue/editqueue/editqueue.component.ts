import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue.service';
import { QueueForm, Queue } from '../model/model.class';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { AddqueueComponent } from '../addqueue/addqueue.component';


@Component({
  selector: 'app-editqueue',
  templateUrl: './editqueue.component.html',
  styleUrls: ['./editqueue.component.css']
})
export class EditqueueComponent extends 
AppComponentFormClass<Queue,QueueForm> {

  constructor(protected data: QueueService, protected fb: FormBuilder, protected router:Router) 
  {
    super(data, fb, router);
    this.cdata= new QueueForm(this.data.Data);
    this.nav="/main/queue/listqueue";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() {
  }
}
