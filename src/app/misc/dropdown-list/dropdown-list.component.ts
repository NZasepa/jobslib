/**
 * Created by Natan on 04.03.2017.
 */
import { Component, Input } from '@angular/core';
import { DropdownItem } from './dropdown-item.model';
@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent {
  @Input('data') data: Array<DropdownItem> = [];

  constructor() {

  }
}
