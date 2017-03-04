/**
 * Created by Natan on 04.03.2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from './dropdown-item.model';
@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent {
  private isOpen: boolean = false;

  @Input('data') data: Array<DropdownItem> = [];
  @Input('enableSearch') enableSearch: boolean = false;
  @Output('selected') selectedItem: EventEmitter<DropdownItem> = new EventEmitter();

  constructor() {

  }
}
