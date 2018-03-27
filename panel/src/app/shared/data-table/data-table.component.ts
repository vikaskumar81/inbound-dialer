import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
    @Input() label: string;
    @Input() header: any[];
    @Input() field: any[];
    @Input() data: any[];
    @Output() event: EventEmitter<any> = new EventEmitter();
    searchtext="";
    Tdata:any[];

  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }

}
