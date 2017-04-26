import { Offer } from './offer.model';

export interface ListingResponse {
  count: number;
  results: Offer[];
}
