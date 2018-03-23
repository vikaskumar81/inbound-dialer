import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'widget-group',
  templateUrl: './widget-group.component.html',
  styleUrls: ['./widget-group.component.css']
})
export class WidgetGroupComponent implements OnInit {
  column: number;
  @Input() data: any[];
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.column=this.data.length;
  }

}
