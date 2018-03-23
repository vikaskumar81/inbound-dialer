import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { MessageService } from '../message.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MessageForm } from '../model/model.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {

  messagedata = new MessageForm();

  constructor(private supdata: MessageService, private fb: FormBuilder) { }

  ngOnInit()
  {
    
  }


  onSubmit() {
    console.log("Thanks for submitting! Data: " + JSON.stringify(this.messagedata));
  
  }
}