import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingEditDialog } from "./loading-edit.component";

describe("LoadingEditComponent", () => {
  let component: LoadingEditDialog;
  let fixture: ComponentFixture<LoadingEditDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingEditDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
