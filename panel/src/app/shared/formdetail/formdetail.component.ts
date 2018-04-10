import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css']
})
export class FormdetailComponent implements OnInit {
  @Input() tag_label: string;
  @Input() close_frm: boolean;
  @Input() open_frm: boolean;
  @Output() Close: EventEmitter<any> = new EventEmitter();
  @Output() AddNew: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}