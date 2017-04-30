import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormInputTextComponent } from './fields/form-input-text/form-input-text.component';
import { DynamicFieldDirective } from './fields/dynamic-field.directive';

/**
 * Many thanks to Todd Motto for this idea
 * for creating dynamic forms
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputTextComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormInputTextComponent
  ]
})
export class DynamicFormModule { }
