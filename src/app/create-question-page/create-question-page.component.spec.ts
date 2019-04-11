import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule, MatCheckboxModule, MatCardModule, MatOptionModule, MatSelectModule,
  MatSnackBarModule, MatInputModule } from '@angular/material';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

import { CreateQuestionPageComponent }  from './create-question-page.component';
import { CreateQuestionPageTopicSectionComponent } from './create-question-page-topic-section/create-question-page-topic-section.component';
import { CreateQuestionPageEditorSectionComponent } from './create-question-page-editor-section/create-question-page-editor-section.component';
import { ApiService } from '../_services/api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tinymce is causing "Uncaught TypeError:Cannot read property setAttribute of undefined"
// marking all tests for create-question-page and create-question-page-editor-section as pending
// Will add a frontend issue on github to be worked later.

xdescribe('CreateQuestionPageComponent', () => {
  let component: CreateQuestionPageComponent;
  let fixture: ComponentFixture<CreateQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPageComponent, CreateQuestionPageTopicSectionComponent,
        CreateQuestionPageEditorSectionComponent ],
      imports: [ BrowserAnimationsModule, FormsModule, EditorModule, FormsModule, MatFormFieldModule, MatCheckboxModule,
        MatCardModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatInputModule ],
      providers: [
        { provide: ApiService, useValue: { postCreatedQuestion: jasmine.createSpy('postCreatedQuestion') }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
