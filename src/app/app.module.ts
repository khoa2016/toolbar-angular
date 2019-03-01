import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarButtonGroupsComponent } from './toolbar-button-groups/toolbar-button-groups.component';
import { ToolbarButtonSingleComponent } from './toolbar-button-single/toolbar-button-single.component';
import { ToolbarButtonStateComponent } from './toolbar-button-state/toolbar-button-state.component';
import { ToolbarDropdownComponent } from './toolbar-dropdown/toolbar-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarButtonGroupsComponent,
    ToolbarButtonSingleComponent,
    ToolbarButtonStateComponent,
    ToolbarDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
