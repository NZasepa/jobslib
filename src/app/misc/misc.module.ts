/**
 * Created by Natan on 04.03.2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { DropdownContainerDirective } from './dropdown-list/dropdown-container.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownContainerDirective,
    DropdownListComponent
  ],
  declarations: [
    DropdownContainerDirective,
    DropdownListComponent
  ]
})
export class MiscModule {

}
