import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerShowAnswerComponent } from "./show-answer.component";

describe("ShowAnswerComponent", () => {
  let component: PlayerShowAnswerComponent;
  let fixture: ComponentFixture<PlayerShowAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerShowAnswerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerShowAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
