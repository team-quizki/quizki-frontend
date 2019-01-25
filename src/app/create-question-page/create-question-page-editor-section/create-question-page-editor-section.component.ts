import { Component } from '@angular/core';

@Component({
    selector:'app-create-question-page-editor-section',
    templateUrl:'./create-question-page-editor-section.component.html',
    styleUrls: ['../create-question-page.component.css']
})

export class CreateQuestionPageEditorSectionComponent {
    currentTopic:string = "";
    
    userData:string = "This is the editor";
        
clickedTopic(topicChoice:any){
        this.currentTopic = topicChoice;
    }    
    
    
    
}