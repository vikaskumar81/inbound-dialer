import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListqueueComponent } from './listqueue.component';

describe('ListqueueComponent', () => {
  let component: ListqueueComponent;
  let fixture: ComponentFixture<ListqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
