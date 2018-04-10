import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';

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
  close_frm:boolean;
  open_frm:boolean;
  tag_label:string;
  constructor(protected data: CampaignService) { }

  ngOnInit() {
    this.data.status.subscribe(res=>{
      this.close_frm=res;
      if(res)
        this.open_frm=false;
      else
        this.open_frm=true;
    });
    this.data.label.subscribe(res=>this.tag_label=res);
  }

  onAddNew()
  {
    this.data.changefrm(true);
    this.data.changelabel("Add New");
    this.data.Data=null;
  }

  onClose()
  {
    this.data.changefrm(false);
    this.data.changelabel("List Details");
  }

  ngOnDestory(){
    this.data.frm_label.unsubscribe();
    this.data.frm_status.unsubscribe();
  }
}
