import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListextensionComponent } from './listextension.component';

describe('ListextensionComponent', () => {
  let component: ListextensionComponent;
  let fixture: ComponentFixture<ListextensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListextensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListextensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
