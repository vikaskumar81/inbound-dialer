import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { MessageService } from '../message.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { MessageForm, Message } from '../model/model.class';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent  extends AppComponentFormClass<Message, MessageForm> {

 
  constructor(protected data: MessageService, protected fb: FormBuilder, protected router: Router) { 
    super(data, fb, router);
    this.nav='/main/message/listmessage';
    this.cdata=new MessageForm(null);
  }
}