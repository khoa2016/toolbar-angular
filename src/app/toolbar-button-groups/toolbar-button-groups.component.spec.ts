import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonGroupsComponent } from './toolbar-button-groups.component';

describe('ToolbarButtonGroupsComponent', () => {
  let component: ToolbarButtonGroupsComponent;
  let fixture: ComponentFixture<ToolbarButtonGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarButtonGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarButtonGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
