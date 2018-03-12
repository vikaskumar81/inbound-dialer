import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './authentication/guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';

export const AppRoutes : Routes = [
  {
  path: '',
  component: AppBlankComponent,
  children: [{ 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },{
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'authentication/404' 
}, {
  path: 'main',
  component: FullComponent,
  canActivate:[AuthGuard],
  children: [{
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' ,
  }, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }, {
    path: 'campaign',
    loadChildren: './campaign/campaign.module#CampaignModule'
  }, {
    path: 'message',
    loadChildren: './message/message.module#MessageModule'
  }, {
    path: 'leads',
    loadChildren: './leads/leads.module#LeadsModule'
  }, {
    path: 'supplier',
    loadChildren: './supplier/supplier.module#SupplierModule'
  }, {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }]
}];