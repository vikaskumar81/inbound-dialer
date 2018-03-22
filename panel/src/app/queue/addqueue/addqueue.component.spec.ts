import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueueComponent } from './addqueue.component';

describe('AddqueueComponent', () => {
  let component: AddqueueComponent;
  let fixture: ComponentFixture<AddqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
