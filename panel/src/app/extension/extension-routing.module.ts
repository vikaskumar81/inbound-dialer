import { Routes} from '@angular/router';
import { AddextensionComponent } from './addextension/addextension.component';
import { EditextensionComponent } from './editextension/editextension.component';
import { ListextensionComponent } from './listextension/listextension.component';

export const ExtenstionRoutes: Routes = [{ 
  path: '',
  children: [{
    path: 'addextension', 
    component: AddextensionComponent
  },{
    path: 'editextension', 
    component: EditextensionComponent
  },{
    path: 'listextension', 
    component: ListextensionComponent
  }]
}];
