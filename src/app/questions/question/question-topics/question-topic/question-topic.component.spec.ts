import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTopicComponent } from './question-topic.component';

describe('QuestionTopicComponent', () => {
  let component: QuestionTopicComponent;
  let fixture: ComponentFixture<QuestionTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
