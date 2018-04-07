import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
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
export class CampaignComponent implements OnInit {
  status: boolean;
  constructor(protected data: CampaignService) { }

  ngOnInit() {
    this.data.status.subscribe(res=>this.status=res);
  }
}
