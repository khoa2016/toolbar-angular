import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonSingleComponent } from './toolbar-button-single.component';

describe('ToolbarButtonSingleComponent', () => {
  let component: ToolbarButtonSingleComponent;
  let fixture: ComponentFixture<ToolbarButtonSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarButtonSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarButtonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
