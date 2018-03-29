import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { AppService } from './AppService.class';
import { FormBuilder } from "@angular/forms";

export class AppComponentClass<T1, T2> implements OnInit {
    public displayedColumns : any[];
    public cdata : T2;
    protected insertdata:string;
    protected nav:string;
    protected keyfield:number;

    public dataSource = new MatTableDataSource();
    @ViewChild(MatSort) protected sort: MatSort;
    @ViewChild(MatPaginator) protected paginator: MatPaginator;
    protected editnav:string;
    protected deletenav:string;
    protected deletestatus:string;
    
    constructor(protected data: AppService<T1>, protected router: Router, protected fb?: FormBuilder) { }

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

    Edit(row:T1)
    {
      this.data.Data=row;
      this.router.navigate ( [ this.editnav ] );
    }

    

    Delete(row:T1, id:number)
    {
      console.log("deleted row :"+id);
      console.log("deleted row :"+JSON.stringify(row));
      this.data.Data=row;
      this.data.deleteService(id).subscribe( data => 
        {
          console.log(data);
          this.deletestatus=data;
          this.data.getService().subscribe(data => this.dataSource.data = data);
        }
      );
      
      this.router.navigate ( [ this.deletenav ] );
    }

    onSubmit()
    {
        console.log("Thanks for submitting! Data: " + JSON.stringify(this.cdata));
        this.data.saveService(JSON.stringify(this.cdata)).subscribe( data =>  {
            console.log(data);
            this.insertdata=data;
            this.data.getService().subscribe(data => this.dataSource.data = data);
          });
        this.router.navigate ( [ this.nav ] );
    }

    onUpdate()
    {
        this.data.updateService(JSON.stringify(this.cdata), this.keyfield).subscribe( data => 
            {
              console.log(data);
              this.insertdata=data;
              this.data.getService().subscribe(data => 
                {
                    this.dataSource.data = data;
                    console.log(data);
                });
            }
        );
        this.router.navigate ( [ this.nav ] );
    }
  }