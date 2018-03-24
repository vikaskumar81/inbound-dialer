import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatPaginator} from '@angular/material';
import {MatSortModule, MatSort} from '@angular/material/sort';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Campaign } from '../model/campaign.model';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcampaign',
  templateUrl: './listcampaign.component.html',
  styleUrls: ['./listcampaign.component.css']
})

export class ListcampaignComponent implements OnInit, AfterViewInit{
  displayedColumns = ['name', 'provider', 'filename', 'channel', 'ppm', 'ringtime', 'answertime', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  gotdata : boolean;

  widgetdata =[{"icon":"account circle","data":205,"label":"Client"},{"icon":"explore","data":306,"label":"Tickets"},
  {"icon":"language","data":700,"label":"Emails"},{"icon":"contact phone","data":300,"label":"Agents"}];

  constructor(private data: CampaignService, private router: Router) { }
 
  ngOnInit() {
    this.data.getService().subscribe(data => this.dataSource.data = data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    //console.log("Changing page views");
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  EditDetail(row:any)
  {
    this.data.Data=row;
    this.router.navigate ( [ '/main/campaign/editcampaign' ] );
  }
}