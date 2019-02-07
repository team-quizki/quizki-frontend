import { Component, EventEmitter, Output } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
    selector:'app-create-question-page-editor-section',
    templateUrl:'./create-question-page-editor-section.component.html',
    styleUrls: ['../create-question-page.component.css']
})

export class CreateQuestionPageEditorSectionComponent {
    currentTopic:string = "";
    
    editorData = {questionText:"type question here"};
    
    @Output() editorDataObj = new EventEmitter<{}>();
    
    
}