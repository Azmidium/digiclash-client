import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCaptionComponent } from './image-caption.component';

describe('ImageCaptionComponent', () => {
  let component: ImageCaptionComponent;
  let fixture: ComponentFixture<ImageCaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
