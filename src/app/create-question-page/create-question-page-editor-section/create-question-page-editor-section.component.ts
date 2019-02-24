import { Component, EventEmitter, Output } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
    selector:'app-create-question-page-editor-section',
    templateUrl:'./create-question-page-editor-section.component.html',
    styleUrls: ['../create-question-page.component.css']
})

export class CreateQuestionPageEditorSectionComponent {
    currentTopic:string = "";
    
    createQuestionEditorText = "type question here";
    
    @Output() createQuestionEditorTextData = new EventEmitter<string>();
    
    // submitTextEvent function is called when the editor is blurred
    submitTextEvent(){
      this.createQuestionEditorTextData.emit(this.createQuestionEditorText);
    }
    
}