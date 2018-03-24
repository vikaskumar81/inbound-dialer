import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDidComponent } from './list-did.component';

describe('ListDidComponent', () => {
  let component: ListDidComponent;
  let fixture: ComponentFixture<ListDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
