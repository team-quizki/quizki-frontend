import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorModule } from '@tinymce/tinymce-angular';

import { CreateQuestionPageEditorSectionComponent } from './create-question-page-editor-section.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

describe('CreateQuestionPageEditorSectionComponent', () => {
  let component: CreateQuestionPageEditorSectionComponent;
  let fixture: ComponentFixture<CreateQuestionPageEditorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPageEditorSectionComponent ],
      imports: [
        EditorModule, FormsModule, MatCardModule
       ]
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
