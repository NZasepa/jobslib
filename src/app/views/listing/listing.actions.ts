import { Action } from '@ngrx/store';
import { ListingResponse } from '../../models/listing-response.model';

export const FIND = '[Listing] Find';
export const FIND_SUCCESS = '[Listing] Find Success';

export class Find implements Action {
  readonly type = FIND;

  constructor(public payload: Object) { }
}

export class FindSuccess implements Action {
  readonly type = FIND_SUCCESS;

  constructor(public payload: ListingResponse) { }
}

export type Actions = Find | FindSuccess;
