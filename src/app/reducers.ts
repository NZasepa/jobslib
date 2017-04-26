import * as fromListing from './views/listing/listing.reducer';

export interface State {
  listing: fromListing.State;
}

export const reducers = {
  listing: fromListing.reducer
};
