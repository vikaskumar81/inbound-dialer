import { Component, OnInit } from '@angular/core';
import { ListleadsComponent } from '../listleads/listleads.component';
import { UploadleadsComponent } from '../uploadleads/uploadleads.component';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';
import { LeadsService } from '../leads.service';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
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

export class LeadsComponent implements OnInit {

  state:boolean;
  
  constructor(public data: LeadsService) { }

  ngOnInit() { }

  onClose(status)
  {
    console.log("Current Status : "+status);
    this.state=status;
  }

  ngOnDestory(){ }
}
