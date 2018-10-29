import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface questiontype {
    value: string;
    viewValue: string;
}

export interface Topics {
    value: string;
    viewValue: string;
}

export interface QuestionType {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-create-question-page',
    templateUrl: './create-question-page.component.html',
    styleUrls: ['./create-question-page.component.css']
})

export class CreateQuestionPageComponent {
    
    title:string = "Create a Question:";
    GETid:number = 23;                              // user ID placeholder, otherwise obtained from DB when user logs in.
    dataSentResponse:any = "";
    dataReceivedResponse = "";
    currentTopic:string = "";
    showReferences:string = "";
    showAnswers:string = "";
    
     // Data Transfer Object
    CreateQuestionDTO:any =
    [{
        "userId": 0,
        "text": "RequiredQuestionText",
        "description": "",
        "type": 0,
        "topics": ["string1", "string2", "stringN"],
        "references": ["ref1", "ref2", "ref3", "ref4"],
        "difficulty": 1,
        "choices": [
                    {"text":"", "isCorrect":null}, 
                    {"text":"", "isCorrect":null},
                    {"text":"", "isCorrect":null},
                    {"text":"", "isCorrect":null}
                   ]
    }];
    
    topics: Topics[] = [
        {value: 'topic-0', viewValue: 'Topic 0'},   // topics placeholder, otherwise obtained from DB when user loads page.  
        {value: 'topic-1', viewValue: 'Topic 1'},
        {value: 'topic-2', viewValue: 'Topic 2'},
        {value: 'topic-3', viewValue: 'Topic 3'},
        {value: 'topic-4', viewValue: 'Topic 4'},
        {value: 'topic-5', viewValue: 'Topic 5'}
    ];
  
    newTopic:string = "";                           // currently not part of the DTO
    
    questionType: QuestionType[] = [
        {value: "1",    viewValue: 'Single'},
        {value: "2",    viewValue: 'Multiple'},
        {value: "3",    viewValue: 'Phrase'},
        {value: "4",    viewValue: 'Sequence'},
        {value: "5",    viewValue: 'Set'}
    ];
  
    briefQuestionDesc:string = "Question overview";
  
    tinyMCEeditorData:string = "Enter your question here:";
    
    answer1:string = "answer 1";
    answer1isCorrect = false;
    answer2:string = "answer 2";
    answer2isCorrect = false;
    answer3:string = "answer 3";
    answer3isCorrect = false;
    answer4:string = "answer 4";
    answer4isCorrect = false;
    
    reference1:string = "reference 1";
    reference2:string = "reference 2";
    reference3:string = "reference 3";
    reference4:string = "reference 4";
    
    
    checked:boolean = true;
    id:string = "checkbox1";
    
    constructor(){
        this.tinyMCEeditorData;
        this.CreateQuestionDTO[0].userId = this.GETid;
    };
  
    updateCurrentTopic(){
        this.currentTopic = this.newTopic;
    }
    
    clickedTopic(topicChoice:any){
        this.currentTopic = topicChoice;
        this.CreateQuestionDTO[0].topics = topicChoice;
    }
    
    clickedQuestionType(quesType:any){
        this.CreateQuestionDTO[0].type = quesType;
    }
   
    onSaveQuestions() {
          
        this.CreateQuestionDTO[0].text = this.tinyMCEeditorData;  
        this.CreateQuestionDTO[0].description = this.briefQuestionDesc;
        this.CreateQuestionDTO[0].choices[0].text = this.answer1 + ":";
        this.CreateQuestionDTO[0].choices[0].isCorrect = this.answer1isCorrect + ", ";
        this.CreateQuestionDTO[0].choices[1].text = this.answer2;
        this.CreateQuestionDTO[0].choices[1].isCorrect = this.answer2isCorrect;
        this.CreateQuestionDTO[0].choices[2].text = this.answer3;
        this.CreateQuestionDTO[0].choices[2].isCorrect = this.answer3isCorrect;
        this.CreateQuestionDTO[0].choices[3].text = this.answer4;
        this.CreateQuestionDTO[0].choices[3].isCorrect = this.answer4isCorrect;
        
        this.CreateQuestionDTO[0].references[0] = this.reference1;
        this.CreateQuestionDTO[0].references[1] = this.reference2;
        this.CreateQuestionDTO[0].references[2] = this.reference3;
        this.CreateQuestionDTO[0].references[3] = this.reference4;
                
        this.showReferences = JSON.stringify(this.CreateQuestionDTO[0].references); 
        this.showAnswers = JSON.stringify(this.CreateQuestionDTO[0].choices); 
    }    
}
