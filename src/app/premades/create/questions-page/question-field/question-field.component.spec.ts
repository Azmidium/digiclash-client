import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFieldComponent } from './question-field.component';

describe('QuestionFieldComponent', () => {
  let component: QuestionFieldComponent;
  let fixture: ComponentFixture<QuestionFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
