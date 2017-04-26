/**
 * Created by kbsystemsmac on 25.04.2017.
 */
import * as ListingActions from './listing.actions';
import { Offer } from '../../models/offer.model';

export interface State {
  findQuery: Object;
  resultsCount: number;
  data: Offer[];
  isFetching: boolean;
}

const initialState: State = {
  findQuery: {},
  resultsCount: 0,
  data: [],
  isFetching: false
};

export function reducer(state = initialState, action: ListingActions.Actions): State {
  switch (action.type) {
    case ListingActions.FIND: {
      return {
        ...state,
        findQuery: action.payload,
        isFetching: true
      };
    }

    case ListingActions.FIND_SUCCESS: {
      return {
        ...state,
        resultsCount: action.payload.count,
        data: action.payload.results,
        isFetching: false
      };
    }

    default: {
      return state;
    }
  }
}
