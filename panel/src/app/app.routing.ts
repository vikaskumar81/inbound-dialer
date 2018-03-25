import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './authentication/guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';

export const APIURL="http://192.168.1.33:3000/";

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
    path: 'extension',
    loadChildren: './extension/extension.module#ExtensionModule'
  },
  {
    path: 'queue',
    loadChildren: './queue/queue.module#QueueModule'
  },{
    path: 'leads',
    loadChildren: './leads/leads.module#LeadsModule'
  },{
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }, {
    path: 'supplier',
    loadChildren: './supplier/supplier.module#SupplierModule'
  }, {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }]
}];