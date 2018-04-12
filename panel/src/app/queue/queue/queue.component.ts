
import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue.service';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
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
export class QueueComponent implements OnInit {
  state:boolean;
  
  constructor(public data: QueueService) { }

  ngOnInit() { }

  onClose(status)
  {
    console.log("Current Status : "+status);
    this.state=status;
  }

  ngOnDestory(){ }
}

