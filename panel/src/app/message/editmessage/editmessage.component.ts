import { Component, OnInit } from '@angular/core';
import { AddmessageComponent } from '../addmessage/addmessage.component';
import { MessageService } from '../message.service';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { MessageForm, Message } from '../model/model.class';

@Component({
  selector: 'app-editmessage',
  templateUrl: './editmessage.component.html',
  styleUrls: ['./editmessage.component.css']
})
export class EditmessageComponent extends 
AppComponentClass<Message,MessageForm> {

  constructor(protected data: MessageService,  protected router:Router,protected fb: FormBuilder) 
  {
    super(data, router, fb);
    this.cdata= new MessageForm(this.data.Data);
    this.nav="/main/message/listmessage";
    this.keyfield=this.data.Data.id;
  }

  ngOnInit() {
  }
}
