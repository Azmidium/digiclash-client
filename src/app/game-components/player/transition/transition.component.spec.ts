import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerTransitionComponent } from "./transition.component";

describe("TransitionComponent", () => {
  let component: PlayerTransitionComponent;
  let fixture: ComponentFixture<PlayerTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTransitionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
