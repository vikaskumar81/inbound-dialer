import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { LeadsService } from '../leads.service';
import { Upload } from '../model/model.class';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listleads',
  templateUrl: './listleads.component.html',
  styleUrls: ['./listleads.component.css']
})
export class ListleadsComponent implements OnInit {

  displayedColumns = ["filename", "leads", "dialed", "answered", "noanswer","busy","failed","conjestion","duration"];
  dataSource = new LeadsDataSource(this.data);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: LeadsService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }

}

export class LeadsDataSource extends DataSource<any> {
  constructor(private data: LeadsService) {
    super();
  }
  
  connect(): Observable<Upload[]> {
    return this.data.getUpload();
  }

  disconnect() {}
}
