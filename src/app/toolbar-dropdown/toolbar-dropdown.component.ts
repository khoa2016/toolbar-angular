import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarDropdownItem } from '../toolbarDropdownItem';

@Component({
  selector: 'app-toolbar-dropdown',
  templateUrl: './toolbar-dropdown.component.html',
  styleUrls: ['./toolbar-dropdown.component.scss']
})
export class ToolbarDropdownComponent implements OnInit {
  @Input() list: ToolbarDropdownItem[];
  @Output() selectItem = new EventEmitter<any>();
  private selectedItem: ToolbarDropdownItem;

  constructor() { }

  onListChange(val: number) {
    console.debug(`In ToolbarDropdownComponent: onListChange(): selected val (${val})`);
    this.selectedItem = this.list.find((item) => item.id === +val);
    console.debug(this.selectedItem);
    this.selectItem.emit(this.selectedItem);
  }

  ngOnInit() {
    console.debug(`In ToolbarDropdownComponent: ngOnInit(): list = `);
    console.debug(this.list);
    // this.selectedItem = this.list.length > 0 ? this.list[0] : null;
  }

}
