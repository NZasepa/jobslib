import { routerReducer, RouterState } from '@ngrx/router-store';
import * as fromListing from './common/listing/listing.reducer';
import * as fromSearch from './views/search/search.reducers';


export interface State {
  router: RouterState;
  search: fromSearch.State;
  listing: fromListing.State;
}

export const reducers = {
  router: routerReducer,
  search: fromSearch.reducer,
  listing: fromListing.reducer
};
