import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'action',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;
  @Input() data: any;
  @Output() event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() 
  {
    console.log(this.data);
  }
}
