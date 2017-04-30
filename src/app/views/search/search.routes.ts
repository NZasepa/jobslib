import { Routes } from '@angular/router';
import { SearchSitesComponent } from './search-sites/search-sites.component';
import { SearchSingleSiteComponent } from './search-single-site/search-single-site.component';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  },
  {
    path: 'sites',
    component: SearchSitesComponent
  },
  {
    path: ':id',
    component: SearchSingleSiteComponent
  }
];
