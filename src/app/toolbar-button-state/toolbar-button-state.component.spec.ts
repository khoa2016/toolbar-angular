import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonStateComponent } from './toolbar-button-state.component';

describe('ToolbarButtonStateComponent', () => {
  let component: ToolbarButtonStateComponent;
  let fixture: ComponentFixture<ToolbarButtonStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarButtonStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarButtonStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
