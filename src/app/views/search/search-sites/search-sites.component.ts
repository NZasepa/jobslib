import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Store } from '@ngrx/store';
import * as SearchActions from '../search.actions';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { Site } from '../../../models/site.model';
import { go } from '@ngrx/router-store';

@Component({
  selector: 'app-search-sites',
  templateUrl: './search-sites.component.html',
  styleUrls: ['./search-sites.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      state('out', style({opacity: 0, transform: 'translateX(-100%)'})),
      transition('out => in', [
        style({
          opacity: 0,
          transition: 'translateX(100%)'
        }),
        animate('.2s ease-in-out')
      ]),
      transition('in => out, * => void', [
        style({
          opacity: 1,
          transition: 'translateX(-100%)'
        }),
        animate('.2s ease-in-out')
      ])
    ])
  ]
})
export class SearchSitesComponent implements OnInit {
  animationState = 'in';
  sites$: Observable<Site[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.sites$ = store.select(state => state.search.sites);
  }

  ngOnInit() {
  }

  onBtnClick(e) {
    e.preventDefault();
    this.animationState = (this.animationState === 'in') ? 'out' : 'in';
  }

  onSiteSelected(site: Site) {
    this.store.dispatch(new SearchActions.SiteSelect(site));
  }

}
