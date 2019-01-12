import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSliderComponent } from './answer-slider.component';

describe('AnswerSliderComponent', () => {
  let component: AnswerSliderComponent;
  let fixture: ComponentFixture<AnswerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
