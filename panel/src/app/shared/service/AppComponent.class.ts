import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { AppService } from './AppService.class';
import { FormBuilder } from "@angular/forms";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class AppComponentClass<T1, T2> implements OnInit {
    public displayedColumns : any[];
    public cdata : T2;
    public cur_row : T1;
    protected insertdata:string;
    protected nav:string;
    protected keyfield:number;

    public dataSource = new MatTableDataSource();
    @ViewChild(MatSort) protected sort: MatSort;
    @ViewChild(MatPaginator) protected paginator: MatPaginator;
    protected editnav:string;
    protected deletenav:string;
    protected deletestatus:string;
    public tag_label:string;
    
    constructor(protected data: AppService<T1>, protected router: Router, protected fb?: FormBuilder) { }

    ngOnInit()
    {
        this.data.getService().subscribe(data => this.dataSource.data = data);
        this.data.frm_label.subscribe(res=>{this.tag_label=res; console.log(res);});
        this.keyfield=-1;
        /* this.data.solution.subscribe(res=>{
          this.cur_row=res;
          console.log(res);
        }); */
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
      this.data.changelabel("Edit Details");
      this.data.Data=row;
      //this.router.navigate ( [ this.editnav ] );
      this.data.changefrm(true);
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
      
      //this.router.navigate ( [ this.deletenav ] );
    }

    onSubmit()
    {
        console.log("Thanks for submitting! Data: " + JSON.stringify(this.cdata));
        console.log(this.keyfield);
        if(this.keyfield==-1)
        {
          this.data.saveService(JSON.stringify(this.cdata)).subscribe( data =>  {
            console.log(data);
            this.insertdata=data;
            this.data.getService().subscribe(data =>{ 
              this.dataSource.data = data;
              console.log(data);
            });
          });
        }
        else
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
            });
        }
        this.data.changefrm(false);
        this.router.navigate ( [ this.nav ] );
    }

    /* onUpdate()
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
        this.data.changefrm(false);
        //this.router.navigate ( [ this.nav ] );
    } */

    onDestroy()
    {
      this.data.frm_label.unsubscribe();
    }
  }