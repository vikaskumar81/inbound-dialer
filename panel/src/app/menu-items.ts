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
    icon: 'home'
  },
  { state: '',
  name: 'OutBound',
  type: 'saperator',
  icon: 'av_timer'  
  },{
    state: 'campaign',
    name: 'Campaign',
    type: 'link',
    icon: 'bubble_chart',
  },
  {
    state: 'leads',
    name: 'Leads',
    type: 'link',
    icon: 'toc',
  },
  {
    state: 'message',
    name: 'Message',
    type: 'link',
    icon: 'message',
  },
  { state: '',
    name: 'Inbound-Bound',
    type: 'saperator',
    icon: 'av_timer'  
  },
  {
    state: 'extension',
    name: 'Extension',
    type: 'link',
    icon: 'phone',
  },
  {
    state: 'queue',
    name: 'Queue',
    type: 'link',
    icon: 'web',
  },
  {
    state: 'did',
    name: 'DID',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'didadd', name: 'Add'},
      {state: 'didlist', name: 'List'},
      {state: 'didupload', name: 'Upload'}
    ]
  },
  { state: '',
    name: 'Common',
    type: 'saperator',
    icon: 'av_timer',  
  },
  {
    state: 'supplier',
    name: 'Supplier',
    type: 'link',
    icon: 'web',
  },
  {
    state: 'user',
    name: 'User',
    type: 'link',
    icon: 'face',
  },
  { state: '',
    name: 'Report/Details',
    type: 'saperator',
    icon: 'av_timer'  
  },
  {
    state: 'reports',
    name: 'Reports',
    type: 'link',
    icon: 'border_all',
  }    
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
