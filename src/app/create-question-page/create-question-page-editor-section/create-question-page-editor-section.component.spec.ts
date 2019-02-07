import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionPageEditorSectionComponent } from './create-question-page-editor-section.component';

describe('CreateQuestionPageEditorSectionComponent', () => {
  let component: CreateQuestionPageEditorSectionComponent;
  let fixture: ComponentFixture<CreateQuestionPageEditorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPageEditorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPageEditorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
