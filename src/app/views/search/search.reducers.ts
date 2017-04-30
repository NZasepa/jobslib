import * as SearchActions from './search.actions';
import { Site } from '../../models/site.model';
import { SITES_DATA } from '../../data/sites.data';

export interface State {
  sites: Site[];
  siteSelected: Site | null;
  siteQuery: Object;
}

const initialState: State = {
  sites: SITES_DATA,
  siteSelected: null,
  siteQuery: {}
};

export function reducer(state = initialState, action: SearchActions.Actions) {
  switch (action.type) {
    case SearchActions.SITE_SELECT: {
      return {
        ...state,
        siteSelected: action.payload,
      };
    }

    case SearchActions.SITE_QUERY: {
      return {
        ...state,
        siteQuery: action.payload
      };
    }

    case SearchActions.SITE_RESET: {
      return {
        ...state,
        siteSelected: null,
        siteQuery: {}
      };
    }

    case SearchActions.SITE_RESET_QUERY: {
      return {
        ...state,
        siteQuery: {}
      };
    }

    default: {
      return state;
    }
  }
}
