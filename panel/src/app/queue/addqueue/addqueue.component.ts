import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { QueueService } from '../queue.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { QueueForm, Queue } from '../model/model.class';
import { MatSelect, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';


@Component({
  selector: 'app-addqueue',
  templateUrl: './addqueue.component.html',
  styleUrls: ['./addqueue.component.css']
})
export class AddqueueComponent extends AppComponentClass<Queue, QueueForm> {

    customer : Option[];
    foundcustomer : boolean;
    extension : Option[];
    foundextension : boolean;
    
  constructor(protected data: QueueService,  protected router: Router,protected fb: FormBuilder,protected msg: MatSnackBar) {
    super(data, router, fb ,msg);
    this.nav='/main/queue/';
   // this.cdata=new QueueForm(null);
  }

  ngOnInit() {
    super.ngOnInit();

    this.data.solution.subscribe(res=>{
      this.cdata=new QueueForm(res);
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

     this.data.getExtension().subscribe(
      data => {
        if(data.length>0)
        {
          this.foundextension=true;
          this.extension=data;
          console.log(data);
        }
    });
    }
}