import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HostTransitionComponent } from "./transition.component";

describe("TransitionComponent", () => {
  let component: HostTransitionComponent;
  let fixture: ComponentFixture<HostTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostTransitionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
