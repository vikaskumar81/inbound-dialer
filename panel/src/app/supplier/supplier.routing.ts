import { Routes } from '@angular/router';

import { ListsupplierComponent } from './listsupplier/listsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';
import { SupplierComponent } from './supplier/supplier.component';

export const SupplierRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'listsupplier', 
      component: ListsupplierComponent
    },{
      path: 'addsupplier', 
      component: AddsupplierComponent
    },{
      path: 'editsupplier', 
      component: EditsupplierComponent
    }, {
      path: '', 
      component: SupplierComponent
    }]
  }
];