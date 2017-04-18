/**
 * Created by Natan on 04.03.2017.
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MiscModule } from '../misc/misc.module';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule,
    MiscModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PrimaryNavigationComponent
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PrimaryNavigationComponent
  ]
})
export class LayoutModule {}
