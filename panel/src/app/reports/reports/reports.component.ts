import { Component, OnInit } from '@angular/core';
import { CalldetailsComponent } from '../../reports/calldetails/calldetails.component';
import { CurrentcallsComponent } from '../../reports/currentcalls/currentcalls.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
