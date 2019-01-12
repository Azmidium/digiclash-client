import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanTogglerComponent } from './boolean-toggler.component';

describe('BooleanTogglerComponent', () => {
  let component: BooleanTogglerComponent;
  let fixture: ComponentFixture<BooleanTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
