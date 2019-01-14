import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerConnectedComponent } from "./connected.component";

describe("ConnectedComponent", () => {
  let component: PlayerConnectedComponent;
  let fixture: ComponentFixture<PlayerConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerConnectedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
