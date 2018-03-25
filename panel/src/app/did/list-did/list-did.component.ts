import { Component, OnInit } from '@angular/core';
import { DID } from '../model/model.class';
import { AppComponentListClass } from '../../shared/service/AppComponent.class';
import { DidService } from '../did.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-did',
  templateUrl: './list-did.component.html',
  styleUrls: ['./list-did.component.css']
})
export class ListDidComponent extends AppComponentListClass<DID> {

  constructor(protected data: DidService, protected router: Router) 
  { 
    super(data, router);
    this.displayedColumns = ['number','supplier'];
  }

  ngOnInit() {
  }

}
