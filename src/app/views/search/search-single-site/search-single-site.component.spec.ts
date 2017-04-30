import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSingleSiteComponent } from './search-single-site.component';

describe('SearchSingleSiteComponent', () => {
  let component: SearchSingleSiteComponent;
  let fixture: ComponentFixture<SearchSingleSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSingleSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSingleSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
