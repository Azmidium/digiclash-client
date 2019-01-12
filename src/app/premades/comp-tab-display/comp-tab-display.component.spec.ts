import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTabDisplayComponent } from './comp-tab-display.component';

describe('CompTabDisplayComponent', () => {
  let component: CompTabDisplayComponent;
  let fixture: ComponentFixture<CompTabDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTabDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTabDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
