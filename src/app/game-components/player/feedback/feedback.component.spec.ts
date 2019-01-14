import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerFeedbackComponent } from "./feedback.component";

describe("FeedbackComponent", () => {
  let component: PlayerFeedbackComponent;
  let fixture: ComponentFixture<PlayerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerFeedbackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
