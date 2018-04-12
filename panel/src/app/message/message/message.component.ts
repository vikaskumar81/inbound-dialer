import { Component, OnInit } from '@angular/core';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';
import { MessageService } from '../message.service';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class MessageComponent implements OnInit {
  state:boolean;
  
  constructor(public data: MessageService) { }

  ngOnInit() { }

  onClose(status)
  {
    console.log("Current Status : "+status);
    this.state=status;
  }

  ngOnDestory(){ }
}