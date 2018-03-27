import { Component, OnInit } from '@angular/core';
import { AddmessageComponent } from '../addmessage/addmessage.component';
import { MessageService } from '../message.service';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentFormClass } from '../../shared/service/AppComponentForm.class';
import { MessageForm, Message } from '../model/model.class';

@Component({
  selector: 'app-editmessage',
  templateUrl: './editmessage.component.html',
  styleUrls: ['./editmessage.component.css']
})
export class EditmessageComponent extends 
AppComponentFormClass<Message,MessageForm> {

  constructor(protected data: MessageService, protected fb: FormBuilder, protected router:Router) 
  {
    super(data, fb, router);
    this.cdata= new MessageForm(this.data.Data);
    this.nav="/main/message/listmessage";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() {
  }
}
