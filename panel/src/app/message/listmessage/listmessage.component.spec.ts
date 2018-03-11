import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmessageComponent } from './listmessage.component';

describe('ListmessageComponent', () => {
  let component: ListmessageComponent;
  let fixture: ComponentFixture<ListmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
