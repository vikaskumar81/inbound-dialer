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
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'av_timer'
  },
  { state: '',
  name: 'OutBound',
  type: 'saperator',
  icon: 'av_timer'  
  },{
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
  },
  { state: '',
    name: 'Inbound-Bound',
    type: 'saperator',
    icon: 'av_timer'  
  },
  {
    state: 'extension',
    name: 'Extension',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'addextension', name: 'Add'},
      {state: 'listextension', name: 'List'}          
    ]
  },
  {
    state: 'queue',
    name: 'Queue',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'addqueue', name: 'Add'},
      {state: 'listqueue', name: 'List'}          
    ]
  },
  {
    state: 'did',
    name: 'DID',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'didextension', name: 'Add'},
      {state: 'didextension', name: 'List'}          
    ]
  },
  { state: '',
    name: 'Common',
    type: 'saperator',
    icon: 'av_timer'  
  },
  {
    state: 'supplier',
    name: 'Supplier',
    type: 'sub',
    icon: 'web',
    children: [
      
      {state: 'addsupplier', name: 'Add'},
      {state: 'listsupplier', name: 'List'}          
    ]
  },
  {
    state: 'user',
    name: 'User',
    type: 'sub',
    icon: 'web',
    children: [
      
      {state: 'adduser', name: 'Add'},
      {state: 'listuser', name: 'List'}          
    ]
  },
  { state: '',
    name: 'Report/Details',
    type: 'saperator',
    icon: 'av_timer'  
  },
  {
    state: 'reports',
    name: 'Reports',
    type: 'sub',
    icon: 'border_all',
    children: [
      {state: 'currentcalls', name: 'Current-Calls'},
      {state: 'calldetails', name: 'Call-Details'},
      {state: 'daily', name: 'Daily'} ,
      {state: 'hourly', name: 'Hourly'}
    ]
  }    
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
