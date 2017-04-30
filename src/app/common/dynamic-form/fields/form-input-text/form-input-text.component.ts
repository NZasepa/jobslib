import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicField } from '../dynamic-field.model';

@Component({
  selector: 'form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss']
})
export class FormInputTextComponent {
  field: DynamicField;
  group: FormGroup;
}
