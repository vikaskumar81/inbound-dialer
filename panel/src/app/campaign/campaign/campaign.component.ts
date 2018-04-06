import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  status: boolean;
  constructor(protected data: CampaignService) { }

  ngOnInit() {
    this.data.status.subscribe(res=>this.status=res);
  }
}
