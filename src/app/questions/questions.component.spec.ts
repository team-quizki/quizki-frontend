import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question/question.component';
import { QuestionTopicsComponent } from './question/question-topics/question-topics.component';
import { QuestionTopicComponent } from './question/question-topics/question-topic/question-topic.component';
import { QuestionReferencesComponent } from './question/question-references/question-references.component';
import { QuestionReferenceComponent } from './question/question-references/question-reference/question-reference.component';
import { QuestionChoicesComponent } from './question/question-choices/question-choices.component';
import { QuestionChoiceComponent } from './question/question-choices/question-choice/question-choice.component';

import { QuestionDataService }          from '../questionData/question-data.service'

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent, QuestionComponent, QuestionTopicComponent, QuestionTopicsComponent, QuestionReferenceComponent, QuestionReferencesComponent, QuestionChoicesComponent, QuestionChoiceComponent ],
      providers: [{
        provide: QuestionDataService, useValue: { getQuestions: jasmine.createSpy('getQuestions'), getQuestionTypeData: jasmine.createSpy('getQuestionTypeData')}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
