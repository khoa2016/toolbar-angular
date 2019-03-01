import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-button-state',
  templateUrl: './toolbar-button-state.component.html',
  styleUrls: ['./toolbar-button-state.component.scss']
})
export class ToolbarButtonStateComponent implements OnInit {
  @Input() title: string;
  @Input() initialState: boolean;
  @Output() buttonClick = new EventEmitter<boolean>();

  _isSelected: boolean;

  constructor() { }

  onClick() {
    this._isSelected = !this._isSelected;
    console.debug(`In ToolbarButtonStateComponent: onClick(): is selected? (${this._isSelected})`);
    this.buttonClick.emit(this._isSelected);
  }

  ngOnChanges(changes) {
    console.debug(`In ToolbarButtonStateComponent: ngOnChanges(): title (${this.title}), changes = `);
    console.debug(changes);
    this._isSelected = changes.initialState.currentValue;
  }

  ngOnInit() {
    console.debug(`In ToolbarButtonStateComponent: ngOnInit(): initialState (${this.initialState})`);
    this._isSelected = this.initialState;
  }

}
