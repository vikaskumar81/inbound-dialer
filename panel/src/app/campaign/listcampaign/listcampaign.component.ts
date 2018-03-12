import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatSort, MatPaginator} from '@angular/material';
@Component({
  selector: 'app-sortable',
  templateUrl: './listcampaign.component.html',
  styleUrls: ['./listcampaign.component.css']
})
export class ListcampaignComponent {
  displayedColumns = ['id', 'name', 'calls', 'channels', 'dpm', 'rbt', 'ast', 'status', 'actions'];
  dataSource = new MatTableDataSource(CMP_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  EditDetail(detail:string){
	console.log("Current row detail : "+detail);
  }
}
export interface CampaignData {
  id: number;
  name: string;
  calls: number;
  channels: number;
  dpm: number;
  rbt: number;
  ast: number;
  status: string;
}

const CMP_DATA: CampaignData[] = [
  {
    "id": 1,
    "name": "Virginia",
    "calls": 24,
    "channels": 42,
    "dpm": 82,
    "rbt": 33,
    "ast": 37,
    "status": "Blocked"
  },
  {
    "id": 2,
    "name": "Ortega",
    "calls": 31,
    "channels": 64,
    "dpm": 48,
    "rbt": 25,
    "ast": 33,
    "status": "Blocked"
  },
  {
    "id": 3,
    "name": "Dyer",
    "calls": 32,
    "channels": 56,
    "dpm": 13,
    "rbt": 39,
    "ast": 24,
    "status": "Blocked"
  },
  {
    "id": 4,
    "name": "Olga",
    "calls": 38,
    "channels": 52,
    "dpm": 43,
    "rbt": 39,
    "ast": 34,
    "status": "Active"
  },
  {
    "id": 5,
    "name": "Ina",
    "calls": 28,
    "channels": 70,
    "dpm": 88,
    "rbt": 38,
    "ast": 31,
    "status": "Blocked"
  },
  {
    "id": 6,
    "name": "Johnson",
    "calls": 39,
    "channels": 29,
    "dpm": 55,
    "rbt": 34,
    "ast": 36,
    "status": "Blocked"
  },
  {
    "id": 7,
    "name": "Kristie",
    "calls": 36,
    "channels": 20,
    "dpm": 12,
    "rbt": 25,
    "ast": 36,
    "status": "Blocked"
  },
  {
    "id": 8,
    "name": "Franco",
    "calls": 26,
    "channels": 96,
    "dpm": 46,
    "rbt": 34,
    "ast": 32,
    "status": "Blocked"
  },
  {
    "id": 9,
    "name": "Higgins",
    "calls": 25,
    "channels": 54,
    "dpm": 66,
    "rbt": 23,
    "ast": 30,
    "status": "Active"
  },
  {
    "id": 10,
    "name": "Gilmore",
    "calls": 37,
    "channels": 29,
    "dpm": 76,
    "rbt": 25,
    "ast": 34,
    "status": "Active"
  },
  {
    "id": 11,
    "name": "Margery",
    "calls": 25,
    "channels": 54,
    "dpm": 93,
    "rbt": 30,
    "ast": 21,
    "status": "Blocked"
  },
  {
    "id": 12,
    "name": "Ewing",
    "calls": 40,
    "channels": 34,
    "dpm": 70,
    "rbt": 24,
    "ast": 21,
    "status": "Blocked"
  },
  {
    "id": 13,
    "name": "Logan",
    "calls": 37,
    "channels": 65,
    "dpm": 85,
    "rbt": 31,
    "ast": 37,
    "status": "Active"
  },
  {
    "id": 14,
    "name": "Hattie",
    "calls": 33,
    "channels": 48,
    "dpm": 11,
    "rbt": 29,
    "ast": 36,
    "status": "Active"
  },
  {
    "id": 15,
    "name": "Ruiz",
    "calls": 34,
    "channels": 90,
    "dpm": 35,
    "rbt": 23,
    "ast": 29,
    "status": "Active"
  },
  {
    "id": 16,
    "name": "Theresa",
    "calls": 30,
    "channels": 49,
    "dpm": 71,
    "rbt": 36,
    "ast": 23,
    "status": "Blocked"
  },
  {
    "id": 17,
    "name": "Mccoy",
    "calls": 34,
    "channels": 51,
    "dpm": 24,
    "rbt": 23,
    "ast": 38,
    "status": "Active"
  },
  {
    "id": 18,
    "name": "Andrews",
    "calls": 30,
    "channels": 36,
    "dpm": 57,
    "rbt": 39,
    "ast": 33,
    "status": "Active"
  },
  {
    "id": 19,
    "name": "Nicole",
    "calls": 22,
    "channels": 95,
    "dpm": 54,
    "rbt": 26,
    "ast": 29,
    "status": "Active"
  },
  {
    "id": 20,
    "name": "Perry",
    "calls": 30,
    "channels": 40,
    "dpm": 23,
    "rbt": 30,
    "ast": 36,
    "status": "Active"
  },
  {
    "id": 21,
    "name": "Spears",
    "calls": 32,
    "channels": 51,
    "dpm": 71,
    "rbt": 35,
    "ast": 21,
    "status": "Active"
  },
  {
    "id": 22,
    "name": "Esmeralda",
    "calls": 33,
    "channels": 88,
    "dpm": 81,
    "rbt": 36,
    "ast": 31,
    "status": "Blocked"
  },
  {
    "id": 23,
    "name": "Delaney",
    "calls": 28,
    "channels": 27,
    "dpm": 44,
    "rbt": 21,
    "ast": 33,
    "status": "Active"
  },
  {
    "id": 24,
    "name": "Holman",
    "calls": 27,
    "channels": 63,
    "dpm": 64,
    "rbt": 28,
    "ast": 20,
    "status": "Active"
  },
  {
    "id": 25,
    "name": "Wells",
    "calls": 22,
    "channels": 44,
    "dpm": 83,
    "rbt": 33,
    "ast": 35,
    "status": "Blocked"
  },
  {
    "id": 26,
    "name": "Lauren",
    "calls": 24,
    "channels": 77,
    "dpm": 61,
    "rbt": 20,
    "ast": 25,
    "status": "Blocked"
  },
  {
    "id": 27,
    "name": "Tamara",
    "calls": 36,
    "channels": 64,
    "dpm": 22,
    "rbt": 30,
    "ast": 21,
    "status": "Blocked"
  },
  {
    "id": 28,
    "name": "Fletcher",
    "calls": 37,
    "channels": 84,
    "dpm": 70,
    "rbt": 36,
    "ast": 29,
    "status": "Active"
  }
];