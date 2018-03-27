import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { AppService } from './AppService.class';
import { FormBuilder } from "@angular/forms";

export class AppComponentFormClass<T1, T2> implements OnInit {

    protected cdata : T2;
    protected insertdata:string;
    protected nav:string;
    protected keyfield:number;

    constructor(protected data: AppService<T1>, protected fb: FormBuilder, protected router: Router) { }

    ngOnInit(){ }
  
    onSubmit()
    {
        console.log("Thanks for submitting! Data: " + JSON.stringify(this.cdata));
        this.data.saveService(JSON.stringify(this.cdata)).subscribe( data => this.insertdata=data);
        this.router.navigate ( [ this.nav ] );
    }

    onUpdate()
    {
        this.data.updateService(JSON.stringify(this.cdata), this.keyfield).subscribe( data => this.insertdata=data);
        this.router.navigate ( [ this.nav ] );
    }
  }