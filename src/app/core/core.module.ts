/**
 * Created by Natan on 31.01.2017.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import in in the AppModule only!');
    }
  }
}
