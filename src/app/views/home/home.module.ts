import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ROUTES_CONFIG } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_CONFIG)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
