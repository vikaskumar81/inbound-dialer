import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { FormsModule }          from '@angular/forms';

@Component({
  selector: 'app-datatable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
    @Input() label: string;
    @Input() headers: any;
    @Input() data: any;
    @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
