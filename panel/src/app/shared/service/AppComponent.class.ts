import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { AppService } from './AppService.class';
import { FormBuilder } from "@angular/forms";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material';
import { Observable }   from 'rxjs/Observable';
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Subscription } from "rxjs/Subscription";

export class AppComponentClass<T1, T2> implements OnInit {
    public displayedColumns : any[];
    public cdata : T2;
    public cur_row : T1;
    protected insertdata:string;
    protected nav:string;
    protected keyfield:number;

    public dataSource = new MatTableDataSource<T1>();

    @ViewChild(MatSort) protected sort: MatSort;
    @ViewChild(MatPaginator) protected paginator: MatPaginator;
    protected editnav:string;
    protected deletenav:string;
    protected deletestatus:string;
    public tag_label:string;
    protected subscribe: Subscription;
    
    constructor(protected data: AppService<T1>, protected router: Router, 
      protected fb?: FormBuilder, protected snackBar?: MatSnackBar) { }

    ngOnInit()
    {
        this.data.frm_label.subscribe(res=>{this.tag_label=res; console.log(res);});
        this.keyfield=-1;
        this.loadDataSource();
    }

    loadDataSource()
    {
      this.subscribe=this.data.getService().subscribe(res=>{this.dataSource.data=res;});
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
          this.loadDataSource();
          this.openSnackBar("Data is deleted successfully","Clear");
        }
      );
      
      //this.router.navigate ( [ this.deletenav ] );
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    onSubmit()
    {
        console.log("Thanks for submitting! Data: " + JSON.stringify(this.cdata));
        console.log(this.keyfield);
        if(this.keyfield==-1)
        {
          //this.openSnackBar("Data is added successfully","Clear");
          this.data.saveService(JSON.stringify(this.cdata)).subscribe( rs =>  {
            this.loadDataSource();
            this.openSnackBar("Data is added successfully","Clear");
          });

          this.subscribe=this.data.getService().subscribe(res=>{this.dataSource.data=res;});
        }
        else
        {
            this.data.updateService(JSON.stringify(this.cdata), this.keyfield).subscribe( rs => 
            {
              this.openSnackBar("Data is updated successfully","Clear");
              this.loadDataSource();
              //this.subscribe=
            });

        }
        this.data.changefrm(false);
        //this.router.navigate ( [ this.nav ] );
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
      this.subscribe.unsubscribe();
    }
  }