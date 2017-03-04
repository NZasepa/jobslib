/**
 * Created by Natan on 04.03.2017.
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MiscModule } from '../misc/misc.module';
@NgModule({
  imports: [
    MiscModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class LayoutModule {}
