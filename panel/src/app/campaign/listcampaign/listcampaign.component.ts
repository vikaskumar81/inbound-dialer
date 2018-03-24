import {Component, ViewChild, OnInit} from '@angular/core';
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

export class ListcampaignComponent implements OnInit{
  displayedColumns = ['name', 'provider', 'filename', 'channel', 'ppm', 'ringtime', 'answertime', 'status'];
  Header = ["S.No.", 'Name', 'Provider', 'Filename', 'Channels', 'Call/Min', 'Ring-Time', 'Answer-Time', 'Status', 'Actions'];
  dataSource = new CampaignDataSource(this.data);
  @ViewChild(MatSort) sort: MatSort;
  tabledata : any;
  gotdata : boolean;

  widgetdata =[{"icon":"account circle","data":205,"label":"Client"},{"icon":"explore","data":306,"label":"Tickets"},
  {"icon":"language","data":700,"label":"Emails"},{"icon":"contact phone","data":300,"label":"Agents"}];

  constructor(private data: CampaignService, private router: Router) { }
 
  ngOnInit() {
    this.data.getCampaign().subscribe(
      data => {
        if(data.length>0)
        {
          this.gotdata=true;
          this.tabledata=data;
        }
    });
  }
  
  EditDetail(row:any)
  {
    this.data.Data=row;
    this.router.navigate ( [ '/main/campaign/editcampaign' ] );
  }
}

export class CampaignDataSource extends DataSource<any> {
  constructor(private data: CampaignService) {
    super();
  }
  
  connect(): Observable<Campaign[]> {
    return this.data.getCampaign();
  }

  disconnect() {}

}