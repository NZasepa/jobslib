import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicField } from './dynamic-field.model';
import { FormInputTextComponent } from './form-input-text/form-input-text.component';

const fields = {
  'input-text': FormInputTextComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  field: DynamicField;

  @Input()
  group: FormGroup;

  component: any;

  constructor(private resolver: ComponentFactoryResolver, private ref: ViewContainerRef) { }

  ngOnInit() {
    const component = fields[this.field.type];

    // Create the component
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.ref.createComponent(factory);

    // Pass properties into created component
    this.component.instance.field = this.field;
    this.component.instance.group = this.group;
  }
}
