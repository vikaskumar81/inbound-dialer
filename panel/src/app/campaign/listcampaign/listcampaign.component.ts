import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatPaginator} from '@angular/material';
import {MatSortModule, MatSort} from '@angular/material/sort';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Campaign } from '../model/campaign.model';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';
import { AppComponentListClass } from '../../shared/service/AppComponentList.class';

@Component({
  selector: 'app-listcampaign',
  templateUrl: './listcampaign.component.html',
  styleUrls: ['./listcampaign.component.css']
})

export class ListcampaignComponent extends AppComponentListClass<Campaign>
{
  widgetdata =[{"icon":"account circle","data":205,"label":"Client"},{"icon":"explore","data":306,"label":"Tickets"},
  {"icon":"language","data":700,"label":"Emails"},{"icon":"contact phone","data":300,"label":"Agents"}];

  constructor(protected data: CampaignService, protected router: Router) 
  { 
    super(data, router);
    this.displayedColumns=['name', 'provider', 'filename', 'channel', 'ppm', 'ringtime', 'answertime', 'status', 'actions'];
  }
 
  EditDetail(row:any)
  {
    this.data.Data=row;
    this.router.navigate ( [ '/main/campaign/editcampaign' ] );
  }
}