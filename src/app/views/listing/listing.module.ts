import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';
import { ROUTES_CONFIG } from './listing.routes';
import { ListingFindComponent } from './listing-find/listing-find.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_CONFIG)
  ],
  declarations: [
    ListingComponent,
    ListingFindComponent
  ]
})
export class ListingModule {}
