/**
 * Created by Natan on 31.01.2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MiscModule } from '../misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    MiscModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MiscModule
  ],
  declarations: []
})
export class SharedModule {}
