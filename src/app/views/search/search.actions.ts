import { Action } from '@ngrx/store';
import { Site } from '../../models/site.model';

export const SITE_SELECT = '[Search] Select Site';
export const SITE_QUERY = '[Search] Site Query';
export const SITE_RESET = '[Search] Site Reset';
export const SITE_RESET_QUERY = '[Search] Site Reset Query';

export class SiteSelect implements Action {
  readonly type = SITE_SELECT;

  constructor(public payload: Site) { }
}

export class SiteQuery implements Action {
  readonly type = SITE_QUERY;

  constructor(public payload: Object) { }
}

export class SiteReset implements Action {
  readonly type = SITE_RESET;

  constructor() { }
}

export class SiteResetQuery implements Action {
  readonly type = SITE_RESET_QUERY;

  constructor() { }
}

export type Actions = SiteSelect
  | SiteQuery
  | SiteReset
  | SiteResetQuery;
