import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { APP_ROUTING_CONFIG } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
