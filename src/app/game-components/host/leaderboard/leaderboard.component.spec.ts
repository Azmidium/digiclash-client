import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HostLeaderboardComponent } from "./leaderboard.component";

describe("LeaderboardComponent", () => {
  let component: HostLeaderboardComponent;
  let fixture: ComponentFixture<HostLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostLeaderboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
