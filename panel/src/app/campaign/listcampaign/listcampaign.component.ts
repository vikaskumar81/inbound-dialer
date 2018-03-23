import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatPaginator} from '@angular/material';
import {MatSortModule, MatSort} from '@angular/material/sort';
import { ButtonComponent } from '../../shared/button/button.component';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
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
  displayedColumns = ['name', 'provider', 'filename', 'channels', 'ppm', 'ringtime', 'answertime', 'status', 'actions'];
  dataSource = new CampaignDataSource(this.data);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: CampaignService, private router: Router) { }
 
  ngOnInit() {}
  
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