import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HostAnswerComponent } from "./answer.component";

describe("AnswerComponent", () => {
  let component: HostAnswerComponent;
  let fixture: ComponentFixture<HostAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostAnswerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
