import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchSitesComponent } from './search-sites/search-sites.component';
import { SharedModule } from '../../shared/shared.module';
import { SEARCH_ROUTES } from './search.routes';
import { SearchSingleSiteComponent } from './search-single-site/search-single-site.component';
import { DynamicFormModule } from '../../common/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormModule,
    RouterModule.forChild(SEARCH_ROUTES)
  ],
  declarations: [
    SearchComponent,
    SearchSitesComponent,
    SearchSingleSiteComponent
  ]
})
export class SearchModule {}
