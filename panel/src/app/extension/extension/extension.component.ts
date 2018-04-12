import { Component, OnInit } from '@angular/core';
import { ExtensionService } from '../extension.service';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css'],
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
export class ExtensionComponent implements OnInit {
  state:boolean;
  
  constructor(public data: ExtensionService) { }

  ngOnInit() { }

  onClose(status)
  {
    console.log("Current Status : "+status);
    this.state=status;
  }

  ngOnDestory(){ }
}