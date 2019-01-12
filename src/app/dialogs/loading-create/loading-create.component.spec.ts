import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingCreateDialog } from "./loading-create.component";

describe("LoadingCreateComponent", () => {
  let component: LoadingCreateDialog;
  let fixture: ComponentFixture<LoadingCreateDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingCreateDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
