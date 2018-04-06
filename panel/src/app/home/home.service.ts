import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  public getData()
  {
    return Math.floor(Math.random()*1000);
  }

}
