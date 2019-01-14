import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HostFinishComponent } from "./finish.component";

describe("FinishComponent", () => {
  let component: HostFinishComponent;
  let fixture: ComponentFixture<HostFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostFinishComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
