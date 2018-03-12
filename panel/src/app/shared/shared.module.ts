import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItems } from '../menu-items';
import { DemoMaterialModule } from '../demo-material-module';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { StatComponent } from './stat/stat.component';
import { PageHeaderComponent } from './breadcrumb/breadcrumbs.component';


@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    DemoMaterialModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    StatComponent,
    PageHeaderComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    StatComponent,
    PageHeaderComponent
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
