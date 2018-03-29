import { Component, OnInit } from '@angular/core';
import { ExtensionService } from '../extension.service';
import { ExtensionForm, Extension } from '../model/model.class';
import { Option } from '../../shared/model/model.class';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { AddextensionComponent } from '../addextension/addextension.component';

@Component({
  selector: 'app-editextension',
  templateUrl: './editextension.component.html',
  styleUrls: ['./editextension.component.css']
})
export class EditextensionComponent  extends AppComponentClass<Extension, ExtensionForm> {

  constructor(protected data: ExtensionService, protected router:Router, protected fb: FormBuilder) 
  { 
    super(data, router, fb);
    this.cdata= new ExtensionForm(this.data.Data);
    this.nav="/main/extension/listextension";
    this.keyfield=this.data.Data.id;
  }


  ngOnInit() {
  }
  

}
