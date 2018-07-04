import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoiceComponent } from './question-choice.component';

describe('QuestionChoiceComponent', () => {
  let component: QuestionChoiceComponent;
  let fixture: ComponentFixture<QuestionChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
