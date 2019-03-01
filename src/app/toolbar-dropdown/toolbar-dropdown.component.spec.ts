import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDropdownComponent } from './toolbar-dropdown.component';

describe('ToolbarDropdownComponent', () => {
  let component: ToolbarDropdownComponent;
  let fixture: ComponentFixture<ToolbarDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
