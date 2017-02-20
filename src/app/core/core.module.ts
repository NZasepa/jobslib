/**
 * Created by Natan on 31.01.2017.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from '../layout/header/header.component';
import { BodyComponent } from '../layout/body/body.component';
import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  providers: [],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import in in the AppModule only!');
    }
  }
}
