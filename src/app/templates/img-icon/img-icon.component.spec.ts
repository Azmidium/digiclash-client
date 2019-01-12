import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIconComponent } from './img-icon.component';

describe('ImgIconComponent', () => {
  let component: ImgIconComponent;
  let fixture: ComponentFixture<ImgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
