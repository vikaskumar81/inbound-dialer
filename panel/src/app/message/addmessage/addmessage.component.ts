import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { MessageService } from '../message.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MessageForm } from '../model/model.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {

  messagedata : MessageForm;
  MessageLabel="Add Message";

  constructor(private msgdata: MessageService, private fb: FormBuilder, private router:Router) { }

  ngOnInit()
  {
    if(this.msgdata.Action!="edit")
    {
      this.messagedata=new MessageForm(null);
      this.MessageLabel="Add Message";
    }
    else
    {
      this.messagedata=new MessageForm(this.msgdata.Data);
      this.MessageLabel="Edit Message";
    }

    this.msgdata.Action="add";
  }

  onSubmit() {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.messagedata));
  }
}