import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSliderComponent } from './point-slider.component';

describe('PointSliderComponent', () => {
  let component: PointSliderComponent;
  let fixture: ComponentFixture<PointSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
