import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { Site } from '../../../models/site.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-single-site',
  templateUrl: './search-single-site.component.html',
  styleUrls: ['./search-single-site.component.scss']
})
export class SearchSingleSiteComponent implements OnInit {
  selectedSite$: Observable<Site>;

  constructor(private store: Store<fromRoot.State>, private fb: FormBuilder) {
    this.selectedSite$ = store.select(state => state.search.siteSelected);
  }

  ngOnInit() {
  }

  siteQueryFormSubmitted(query) {

  }

}
