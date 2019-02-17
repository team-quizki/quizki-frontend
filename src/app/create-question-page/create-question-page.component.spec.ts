import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatFormField, MatCheckbox } from '@angular/material';
import { EditorModule } from '@tinymce/tinymce-angular';

import { CreateQuestionPageComponent }  from './create-question-page.component';
import { CreateQuestionPageTopicSectionComponent } from './create-question-page-topic-section/create-question-page-topic-section.component';
import { ApiService } from '../_services/api.service';

import { QuestionsComponent }           from '../questions/questions.component'
import { QuestionComponent }            from '../questions/question/question.component'
import { QuestionTopicsComponent }      from '../questions/question/question-topics/question-topics.component'
import { QuestionTopicComponent }       from '../questions/question/question-topics/question-topic/question-topic.component'
import { QuestionReferencesComponent }  from '../questions/question/question-references/question-references.component'
import { QuestionReferenceComponent }   from '../questions/question/question-references/question-reference/question-reference.component'
import { QuestionChoicesComponent }     from '../questions/question/question-choices/question-choices.component'
import { QuestionChoiceComponent }      from '../questions/question/question-choices/question-choice/question-choice.component'
import { QuestionDifficultyComponent }  from '../questions/question/question-difficulties/question-difficulty.component'
import { QuestionTypeComponent }        from '../questions/question/question-types/question-type.component'

import { QuestionDataService }          from '../questionData/question-data.service'

describe('CreateQuestionPageComponent', () => {
  let component: CreateQuestionPageComponent;
  let fixture: ComponentFixture<CreateQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPageComponent, CreateQuestionPageTopicSectionComponent,
        MatCard, MatFormField, MatCheckbox,
        QuestionsComponent, QuestionComponent, QuestionTopicsComponent, QuestionTopicComponent, QuestionReferencesComponent, QuestionReferenceComponent, QuestionTypeComponent, QuestionChoicesComponent, QuestionChoiceComponent, QuestionDifficultyComponent ],
      providers: [
        { provide: ApiService, useValue: { postCreatedQuestion: jasmine.createSpy('postCreatedQuestion') }},
        {
          provide: QuestionDataService, useValue: { getQuestions: jasmine.createSpy('getQuestions'), getQuestionTypeData: jasmine.createSpy('getQuestionTypeData')}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
