import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { AppService } from './AppService.class';

export class AppComponentListClass<T> implements OnInit {
    public displayedColumns : any[];
    public dataSource = new MatTableDataSource();
    @ViewChild(MatSort) protected sort: MatSort;
    @ViewChild(MatPaginator) protected paginator: MatPaginator;
    protected editnav:string;
    protected deletenav:string;
    protected keyfield:number;
    
    constructor(protected data: AppService<T>, protected router: Router) { }

    ngOnInit()
    {
        this.data.getService().subscribe(data => this.dataSource.data = data);
    }
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    Edit(row:T)
    {
      this.data.Data=row;
      this.router.navigate ( [ this.editnav ] );
    }

    Delete(row:T)
    {
      console.log("deleted row :"+this.keyfield);
      this.data.Data=row;
      this.data.deleteService(this.keyfield);
      
      this.router.navigate ( [ this.deletenav ] );
    }
  }