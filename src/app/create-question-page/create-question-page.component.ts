import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export interface questiontype {
  value: string;
  viewValue: string;
}

export interface Topic {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-create-question-page',
    templateUrl: './create-question-page.component.html',
    styleUrls: ['./create-question-page.component.css']
    
})

export class CreateQuestionPageComponent {
    
    title: string = "Create a Question:";
    
    array = ['A','B','C','D','E','F'];
    
    responseA = "";
    responseB = "";
  
    value1:string = "";
    
    topics: Topic[] = [
    {value: 'topic-0', viewValue: 'Topic 0'},
    {value: 'topic-1', viewValue: 'Topic 1'},
    {value: 'topic-2', viewValue: 'Topic 2'},
    {value: 'topic-3', viewValue: 'Topic 3'},
    {value: 'topic-4', viewValue: 'Topic 4'},
    {value: 'topic-5', viewValue: 'Topic 5'}
  ];
  
  
    CreateQuestionDTO =
        [{
        "userId": 23,
        "text": "RequiredQuestionText",
        "description": "",
        "type": 1,
        "topics": ["string1", "string2", "stringN"],
        "references": ["ref1", "ref2", "refN"],
        "difficulty": 1,
        "choices": [{"text":"choiceText1", "isCorrect":true}, {"text":"choiceText2", "isCorrect":false}]
        }];
  
  
    
    viewClickedTopic(choice:any){
    this.value1 = "SelectedTopic: " + choice;
    this.CreateQuestionDTO[0].topics = choice;
    console.log(this.CreateQuestionDTO[0].topics);
   // console.log(JSON.stringify(this.CreateQuestionDTO));
    
    
  }
    
    
    
    
    sQuestions = [
      { "id": "0", "desc": "singleQuestion0" },
      { "id": "1", "desc": "singleQuestion1" },
      { "id": "2", "desc": "singleQuestion2" },
      { "id": "3", "desc": "singleQuestion3" },
      { "id": "4", "desc": "singleQuestion4" },
      { "id": "5", "desc": "singleQuestion5" },
      { "id": "6", "desc": "singleQuestion6" },
      { "id": "7", "desc": "singleQuestion7" },
      { "id": "8", "desc": "singleQuestion8" },
      { "id": "9", "desc": "singleQuestion9" }
    ];
    
    sQuestions2 = [
      { "id": "0", "desc": "singleQuestionA" },
      { "id": "1", "desc": "singleQuestionB" },
      { "id": "2", "desc": "singleQuestionC" },
      { "id": "3", "desc": "singleQuestionD" },
      { "id": "4", "desc": "singleQuestionE" },
      { "id": "5", "desc": "singleQuestionF" },
      { "id": "6", "desc": "singleQuestionG" },
      { "id": "7", "desc": "singleQuestionH" },
      { "id": "8", "desc": "singleQuestionI" },
      { "id": "9", "desc": "singleQuestionJ" }
    ];
    
    questiontypes: questiontype[] = [
        {value: 'single', viewValue: 'Single'},
        {value: 'multiple', viewValue: 'Multiple'},
        {value: 'phrase', viewValue: 'Phrase'},
        {value: 'sequence', viewValue: 'Sequence'},
        {value: 'set', viewValue: 'Set'},
    ];
       
    
    
    constructor(private firebaseService: FirebaseService){
       
    };

   
    onSaveQuestions() {

          console.log(JSON.stringify(this.CreateQuestionDTO));

          this.firebaseService.storeQuestions(this.CreateQuestionDTO)
          .subscribe(
            (response) => { this.dataSent(response); console.log(response);},
            (error) => console.log("** " + JSON.stringify(error))
          );
    };
    // (response) => console.log("-- " + JSON.stringify(response)),
    onGetQuestions(){
          this.firebaseService.getQuestions()
          .subscribe(
              //(response) => console.log(response),

              (response: HttpResponse<any[]>) => { 
               const data = response;
               this.dataReceived(data);
               console.log(data);
              },

              //(theQuestions: any[]) => {
              //    console.log(theQuestions) 
              //},
              (error) => console.log("get error is: " + JSON.stringify(error))
          )
    }
    
    dataSent(responseA){
        this.responseA = "Data base created on Firebase is: " + JSON.stringify(responseA);
    }
    
    dataReceived(responseB){
        this.responseB = "Data received from Firebase is: " + JSON.stringify(responseB);
    }
    
}

    

// This error shows when I try to use the map feature as per its use in firebase.service.ts 
/* 
ERROR in src/app/app.component.ts(65,13): error TS2345: Argument of type '(theQuestions: any[]) => void' is not assignable to parameter of type '(value: HttpResponse<any[]>) => void'.
  Types of parameters 'theQuestions' and 'value' are incompatible.
    Type 'HttpResponse<any[]>' is not assignable to type 'any[]'.
      Property 'includes' is missing in type 'HttpResponse<any[]>'.
*/
    
    
