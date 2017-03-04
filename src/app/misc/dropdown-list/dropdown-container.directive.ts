/**
 * Created by Natan on 04.03.2017.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[dropdownContainer]'
})
export class DropdownContainerDirective {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'position', 'relative');
  }
}
