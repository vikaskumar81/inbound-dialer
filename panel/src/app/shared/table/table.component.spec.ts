import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOverviewExample } from './table.component';

describe('TableComponent', () => {
  let component: SortOverviewExample;
  let fixture: ComponentFixture<SortOverviewExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortOverviewExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});