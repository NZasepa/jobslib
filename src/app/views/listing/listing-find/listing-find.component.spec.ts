import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFindComponent } from './listing-find.component';

describe('ListingFindComponent', () => {
  let component: ListingFindComponent;
  let fixture: ComponentFixture<ListingFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
