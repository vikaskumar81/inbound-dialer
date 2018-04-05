import { Component, OnInit } from '@angular/core';
import { WidgetGroupComponent } from '../../shared/widget-group/widget-group.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgetdata =[{icon:"account circle",data:205,label:"Agents"},{icon:"explore",data:1306,label:"Calls"},
  {icon:"language",data:400,label:"Minutes"},{icon:"contact phone",data:30000,label:"Leads"}];

  constructor() {}

  ngOnInit() { }

}
