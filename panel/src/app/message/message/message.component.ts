import { Component, OnInit } from '@angular/core';
import { ListmessageComponent } from '../listmessage/listmessage.component';
import { AddmessageComponent } from '../addmessage/addmessage.component';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}