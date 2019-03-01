import { Component, OnInit, Input } from '@angular/core';
import { ToolbarButtonGroupsItem } from '../toolbarButtonGroupsItem';

@Component({
  selector: 'app-toolbar-button-groups',
  templateUrl: './toolbar-button-groups.component.html',
  styleUrls: ['./toolbar-button-groups.component.scss']
})
export class ToolbarButtonGroupsComponent implements OnInit {
  @Input() list: ToolbarButtonGroupsItem[]; 

  constructor() { }

  onButtonSelected($event, selectedItem) {
    console.debug(`In ToolbarButtonGroupsComponent: onButtonSelected(): selected item = `);
    console.debug(selectedItem);
    console.debug($event);
    if (!selectedItem.state) {
      selectedItem.state = !selectedItem.state;
      this.list = this.list.map((item) => {
        item.state = item.id === selectedItem.id ? selectedItem.state : !selectedItem.state;
        return item;
      });
    } else {
      this.list = this.list.map((item) => Object.assign({}, item));
    }

    console.error(`In ToolbarButtonGroupsComponent: onButtonSelected(): updated list = `);
    console.table(this.list);
  }

  ngOnInit() {
    console.debug(`In ToolbarButtonGroupsComponent: ngOnInit(): list = `);
    console.table(this.list);
  }

}
