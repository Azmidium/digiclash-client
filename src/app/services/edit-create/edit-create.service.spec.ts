import { TestBed } from "@angular/core/testing";

import { EditCreateService } from "./edit-create.service";

describe("CreateService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EditCreateService = TestBed.get(EditCreateService);
    expect(service).toBeTruthy();
  });
});
