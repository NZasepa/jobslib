import { Action } from '@ngrx/store';
import { ListingResponse } from '../../models/listing-response.model';
import { ErrorResponse } from '../../models/error-response.model';

export const SEARCH = '[Listing] Search';
export const SEARCH_SUCCESS = '[Listing] Search Success';
export const SEARCH_ERROR = '[Listing] Search Error';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: Object) { }
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: ListingResponse) { }
}

export class SearchError implements Action {
  readonly type = SEARCH_ERROR;

  constructor(public payload: ErrorResponse) { }
}

export type Actions = Search
  | SearchSuccess
  | SearchError;
