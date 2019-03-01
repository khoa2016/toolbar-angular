import { Component } from '@angular/core';
import { ToolbarDropdownItem } from './toolbarDropdownItem';
import { ToolbarButtonGroupsItem } from './toolbarButtonGroupsItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Toolbar Component';
  colorsList: ToolbarDropdownItem[] = [
    {id: 1, val: 'red'},
    {id: 2, val: 'blue'},
    {id: 3, val: 'purple'},
    {id: 4, val: 'orange'}
  ];

  alignments: ToolbarButtonGroupsItem[] = [
    {id: 1, label: 'left align', state: false},
    {id: 2, label: 'center', state: true},
    {id: 3, label: 'right align', state: false},
  ];

  onSelectedItem(item) {
    console.error(`In AppComponent: onSelectedItem(): selected item = `);
    console.info(item);
  }

  onButtonChanged(newValue) {
    console.error(`In AppComponent: onButtonChanged(): new value (${newValue})`);
  }
}
