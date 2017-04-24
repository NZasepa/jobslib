import { Routes } from '@angular/router';
import { ListingComponent } from './listing.component';
import { ListingFindComponent } from './listing-find/listing-find.component';

export const ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'find',
    component: ListingFindComponent
  }
];
