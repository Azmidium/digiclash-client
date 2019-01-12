import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardSliderComponent } from './leaderboard-slider.component';

describe('LeaderboardSliderComponent', () => {
  let component: LeaderboardSliderComponent;
  let fixture: ComponentFixture<LeaderboardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
