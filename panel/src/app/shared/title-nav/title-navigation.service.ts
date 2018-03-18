import { Injectable } from '@angular/core';

@Injectable()
export class TitleNavigationService {
  private icon:string;
  private title:string;

  constructor() { }

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
}