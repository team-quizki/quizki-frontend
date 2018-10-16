import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
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
    GETid:number = 23; // placeholder, otherwise obtained when user logs in
    dataSentResponse:any = "";
    dataReceivedResponse = "";
    currentTopic:string = "";
    
    topics: Topics[] = [
        {value: 'topic-0', viewValue: 'Topic 0'},
        {value: 'topic-1', viewValue: 'Topic 1'},
        {value: 'topic-2', viewValue: 'Topic 2'},
        {value: 'topic-3', viewValue: 'Topic 3'},
        {value: 'topic-4', viewValue: 'Topic 4'},
        {value: 'topic-5', viewValue: 'Topic 5'}
    ];
  
    newTopic:string = "";
    
    questionType: QuestionType[] = [
        {value: "1",    viewValue: 'Single'},
        {value: "2",    viewValue: 'Multiple'},
        {value: "3",    viewValue: 'Phrase'},
        {value: "4",    viewValue: 'Sequence'},
        {value: "5",    viewValue: 'Set'}
    ];
  
    questionDesc:string = "A brief question overview";
  
    editorData:string = "Enter your question here:";
    
    checked:boolean = true;
    id:string = "checkbox1";
  
    // Data Transfer Object
    CreateQuestionDTO:any =
    [{
        "userId": 0,
        "text": "RequiredQuestionText",
        "description": "",
        "type": 1,
        "topics": ["string1", "string2", "stringN"],
        "references": ["ref1", "ref2", "refN"],
        "difficulty": 1,
        "choices": [{"text":"choiceText1", "isCorrect":true}, {"text":"choiceText2", "isCorrect":false}]
    }];
    
    constructor(private firebaseService: FirebaseService){
        this.editorData;
        this.CreateQuestionDTO[0].userId = this.GETid;
    };
  
    updateCurrentTopic(){
        this.currentTopic = this.newTopic;
    }
    
    clickedTopic(topicChoice:any){
    this.currentTopic = topicChoice;
    this.CreateQuestionDTO[0].topics = topicChoice;
   // console.log(this.CreateQuestionDTO[0].topics);
   // console.log(JSON.stringify(this.CreateQuestionDTO));
  }
    
    clickedQuestionType(quesType:any){
        this.CreateQuestionDTO[0].type = quesType;
    }
   
    onSaveQuestions() {
          
        this.CreateQuestionDTO[0].text = this.editorData;  
        this.CreateQuestionDTO[0].description = this.questionDesc;
        //alert(this.CreateQuestionDTO[0].description);
        //console.log(JSON.stringify(this.CreateQuestionDTO));

        this.firebaseService.storeQuestions(this.CreateQuestionDTO)
        .subscribe(
            (response) => { this.dataSent(response); console.log(response);},
            (error) => console.log("** " + JSON.stringify(error))
        );
    };
    
    onGetQuestions(){
          this.firebaseService.getQuestions()
          .subscribe(
              (response: HttpResponse<any[]>) => { 
               const data = response;
               this.dataReceived(data);
               console.log(data);
              },
              (error) => console.log("get error is: " + JSON.stringify(error))
          )
    }
    
    dataSent(dataSentResponse:any){
        // this.dataSentResponse = "Data base created on Firebase is: " + JSON.stringify(dataSentResponse);
        this.dataSentResponse = "Data base created on Firebase is: " + dataSentResponse.name;
    }
    
    //responseC:string = "";
    
    dataReceived(dataReceivedResponse:any){
        this.dataReceivedResponse = "Data received from Firebase is: " + JSON.stringify(dataReceivedResponse); //working line
    }
}

    

// This error shows when I try to use the map feature as per its use in firebase.service.ts 
/* 
ERROR in src/app/app.component.ts(65,13): error TS2345: Argument of type '(theQuestions: any[]) => void' is not assignable to parameter of type '(value: HttpResponse<any[]>) => void'.
  Types of parameters 'theQuestions' and 'value' are incompatible.
    Type 'HttpResponse<any[]>' is not assignable to type 'any[]'.
      Property 'includes' is missing in type 'HttpResponse<any[]>'.
*/
    
    
