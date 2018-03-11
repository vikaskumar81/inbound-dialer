import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsupplierComponent } from './listsupplier.component';

describe('ListsupplierComponent', () => {
  let component: ListsupplierComponent;
  let fixture: ComponentFixture<ListsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
