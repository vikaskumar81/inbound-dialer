import { Component, OnInit } from '@angular/core';
import { WidgetGroupComponent } from '../../shared/widget-group/widget-group.component';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgetdata =[{icon:"account circle",data:205,label:"Agents"},{icon:"explore",data:1306,label:"Calls"},
  {icon:"language",data:400,label:"Minutes"},{icon:"contact phone",data:30000,label:"Leads"}];

  public geoChartData:any =  {
    chartType: 'GeoChart',
    dataTable: [
      ['Country',   'Minutes', 'Connects'],
      ['Nigeria', 1, 2],
      ['Congo', 1, 2],
      ['Sudan', 1, 2],
      ['Ethiopia', 522, 130],
      ['South Africa', 8834, 6773],
      ['Bangladesh', 90651, 23502],
      ['India', 529842, 96845],
      ['Pakistan', 74495, 13168]
    ],
    options: { }
  };

  public comboChartData:any =  {
    chartType: 'ComboChart',
    dataTable: [
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ],
    options: {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    }
  };

  lineChartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ],
    options: {title: 'Company Performance'},
  };

  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {'title': 'Tasks', is3D: true, animation: {"startup": true}},
  };

  constructor(data:HomeService, router:Router) {
    
  }

  ngOnInit() { }
}
