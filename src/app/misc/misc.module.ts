/**
 * Created by Natan on 04.03.2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownListComponent
  ],
  declarations: [
    DropdownListComponent
  ]
})
export class MiscModule {

}
