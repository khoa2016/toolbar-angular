import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-button-single',
  templateUrl: './toolbar-button-single.component.html',
  styleUrls: ['./toolbar-button-single.component.scss']
})
export class ToolbarButtonSingleComponent implements OnInit {
  @Input() url: string;
  @Input() title: string;

  constructor() { }

  gotoUrl() {
    console.error('clicked on button!');
    // window.location.href = this.url;
    // this.document.location.href = this.url;
    window.open(this.url, "_blank");
  }

  ngOnInit() {
    // console.error(`In ToolbarButtonSingleComponent: url (${url})`);
    console.debug(`In ToolbarButtonSingleComponent: ngOnInit(): url (${this.url})`);
    console.debug(this);
  }

}
