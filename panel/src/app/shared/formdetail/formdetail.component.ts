import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../service/AppService.class';

@Component({
  selector: 'FormDetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css']
})
export class FormdetailComponent<T> implements OnInit {
  @Input() dataservice: AppService<T>;
  close_status: boolean;
  open_status:boolean;
  tag_label : string;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {   
    this.dataservice.status.subscribe(res=>{
      console.log("Current button status : "+res);
      this.close_status=res;
      if(res)
        this.open_status=false;
      else
        this.open_status=true;
    });

    this.dataservice.changelabel("List Details");
    this.dataservice.label.subscribe(res=>
      {
        this.tag_label=res;
        console.log("Current label status : "+res);
      });
  }

  onClose()
  {
    console.log("Close button clicked");
    this.dataservice.changelabel("List Details");
    this.dataservice.changefrm(false);
    this.dataservice.status.subscribe(res=>{
      console.log("Current button status : "+res);
      this.close.emit(res);
      this.close_status=res;
      if(res)
        this.open_status=false;
      else
        this.open_status=true;
    });
  }

  onAddNew()
  {
    console.log("Add button clicked");
    this.dataservice.changelabel("Add New");
    this.dataservice.changefrm(true);
    this.dataservice.status.subscribe(res=>{
      console.log("Current button status : "+res);
      this.close.emit(res);
      this.close_status=res;
      if(res)
        this.open_status=false;
      else
        this.open_status=true;
    });
  }

  ngOnDestory()
  {
    this.dataservice.frm_label.unsubscribe();
    this.dataservice.frm_status.unsubscribe();
  }
}