import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharLimitComponent } from './char-limit.component';

describe('CharLimitComponent', () => {
  let component: CharLimitComponent;
  let fixture: ComponentFixture<CharLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
