import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit, OnInit } from '@angular/core';
import { MenuItems } from '../../menu-items';
import { AppHeaderComponent } from './header/header.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'; 
/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: [],
}) 
export class FullComponent implements OnDestroy, AfterViewInit, OnInit {
  mobileQuery: MediaQueryList;
  dir = 'ltr';
  green: boolean;
  blue: boolean;
  dark: boolean;
  minisidebar: boolean;
  boxed: boolean;
  danger: boolean;
  showHide:boolean;
  sidebarOpened;    
      
  public config: PerfectScrollbarConfigInterface = {};
  private _mobileQueryListener: () => void;
  
  private title:string;
  private icon:string;

  public set Title(value : string) {
    this.title = value;
  }

  public get Title() : string {
    return this.title;
  }

  public set Icon(value : string) {
    this.icon = value;
  }

  public get Icon() : string {
    return this.icon;
  }
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public menuItems: MenuItems) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(){  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {
     //This is for the topbar search
     (<any>$(".srh-btn, .cl-srh-btn")).on('click', function () {
            (<any>$(".app-search")).toggle(200);
        });
     //This is for the megamenu
     
  }
    
  // Mini sidebar
  
   
}
