import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];    
  children?: ChildrenItems[];
}

const MENUITEMS = [
  { state: '',
    name: 'Navigations',
    type: 'saperator',
    icon: 'av_timer'  
  },{
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'av_timer'
  },
    {
    state: 'campaign',
    name: 'Campaign',
    type: 'sub',
    icon: 'bubble_chart',
    children: [
      {state: 'addcampaign', name: 'Add'},
      {state: 'listcampaign', name: 'List'}     
    ]
  },
  {
    state: 'leads',
    name: 'Leads',
    type: 'sub',
    icon: 'apps',
    children: [
      {state: 'uploadleads', name: 'Upload'},
      {state: 'listleads', name: 'List'}
    ]
  },
  {
    state: 'message',
    name: 'Message',
    type: 'sub',
    icon: 'insert_drive_file',
    children: [
      
      {state: 'addmessage', name: 'Add'},
      {state: 'listmessage', name: 'List'}
    ]
  },{
    state: 'supplier',
    name: 'Supplier',
    type: 'sub',
    icon: 'web',
     
    children: [
      
      {state: 'addsupplier', name: 'Add'},
      {state: 'listsupplier', name: 'List'}          
    ]
  },{
    state: 'reports',
    name: 'Reports',
    type: 'sub',
    icon: 'border_all',
    
    children: [
      {state: 'currentcalls', name: 'Current-Calls'},
      {state: 'calldetails', name: 'Call-Details'}    ]
  }    
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
