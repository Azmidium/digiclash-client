import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordCounterComponent } from './keyword-counter.component';

describe('KeywordCounterComponent', () => {
  let component: KeywordCounterComponent;
  let fixture: ComponentFixture<KeywordCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
