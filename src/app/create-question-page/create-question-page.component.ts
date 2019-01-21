import { Component, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material';

import { ApiService } from './../_services/api.service';

@Component({
    selector: 'app-create-question-page',
    templateUrl: './create-question-page.component.html',
    styleUrls: ['./create-question-page.component.css']
})

export class CreateQuestionPageComponent {
    
    // title:string = "Create a Question:";
    GETid:number = 1;                              // user ID placeholder, otherwise obtained from DB when user logs in.
    
    currentTopic:string = "";
    
     // Data Transfer Object
    createQuestionDTO =
    {
        "userId": 1,
        "text": "RequiredQuestionText",
        "description": "",
        "type": 1,
        "topics": ["default"],
        "references": ["reference1", "reference2", "reference3", "reference4"],
        "difficulty": 1,
        "choices": [
                    {"text":"", "isCorrect":true}, 
                    {"text":"", "isCorrect":false},
                    {"text":"", "isCorrect":false},
                    {"text":"", "isCorrect":false}
                   ]
    };
    
    topics = [
        {value: 'topic-0', viewValue: 'Topic 0'},   // topics placeholder, otherwise obtained from DB when user loads page.  
        {value: 'topic-1', viewValue: 'Topic 1'},
        {value: 'topic-2', viewValue: 'Topic 2'},
        {value: 'topic-3', viewValue: 'Topic 3'},
        {value: 'topic-4', viewValue: 'Topic 4'},
        {value: 'topic-5', viewValue: 'Topic 5'}
    ];
      
    newTopic:string = "";                           
    
    questionType = [
        {value: "1",    viewValue: 'Single',   notAvailable: false},
        {value: "2",    viewValue: 'Multiple', notAvailable: true},
        {value: "3",    viewValue: 'Phrase',   notAvailable: true},
        {value: "4",    viewValue: 'Sequence', notAvailable: true},
        {value: "5",    viewValue: 'Set',      notAvailable: true}
    ];
  
    briefQuestionDesc:string = "Question overview";
    tinyMCEeditorData:string = "Enter your question here:";
    answer1:string = "answer 1";
    answer1isCorrect = true;
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
    
    constructor(private apiService: ApiService, public snackBar: MatSnackBar){
        this.createQuestionDTO.userId = this.GETid;
    };
  
    updateCurrentTopic(){
        this.currentTopic = this.newTopic;
        this.createQuestionDTO.topics.push(this.newTopic);
    }
    
    clickedTopic(topicChoice:any){
        this.currentTopic = topicChoice;
        this.createQuestionDTO.topics.push(topicChoice);
    }
        
    clickedQuestionType(quesType:any){
        this.createQuestionDTO.type = quesType;
    }
    
    onSaveQuestions() {
          
        this.createQuestionDTO.text = this.tinyMCEeditorData;  
        this.createQuestionDTO.description = this.briefQuestionDesc;
         
        this.createQuestionDTO.choices.length = 0;       
        this.createQuestionDTO.choices.push({"text":this.answer1, "isCorrect":this.answer1isCorrect});
        this.createQuestionDTO.choices.push({"text":this.answer2, "isCorrect":this.answer2isCorrect});
        this.createQuestionDTO.choices.push({"text":this.answer3, "isCorrect":this.answer3isCorrect});
        this.createQuestionDTO.choices.push({"text":this.answer4, "isCorrect":this.answer4isCorrect});
        
        this.createQuestionDTO.references.push(this.reference1);
        this.createQuestionDTO.references.push(this.reference2);
        this.createQuestionDTO.references.push(this.reference3);
        this.createQuestionDTO.references.push(this.reference4);
          
        this.apiService.post('/api/question', this.createQuestionDTO)
        .subscribe(
            (response:any) => {console.log(JSON.stringify(response));
                               this.clearDTO(); 
                               this.showStatusMsg("success")},
            (error:any) => {console.log(JSON.stringify(error));
                            this.showStatusMsg("failure");
                            }
        );
    };
    
    clearDTO(){
        this.tinyMCEeditorData = "Enter your question here:";
        this.createQuestionDTO.topics.length = 0;
        this.createQuestionDTO.topics.push("default");
        this.createQuestionDTO.references.length = 0;
        this.createQuestionDTO.choices.length = 0;
   
    };
    
    showStatusMsg(status:string){
        if(status === "success"){
            this.snackBar.open("Question Saved!", "", {panelClass:['success-msg'], verticalPosition:'top', duration:2000, });
        }
        if(status === "failure"){
            this.snackBar.open("Question Failure", "Check entries", {panelClass:['failure-msg'],  verticalPosition:'top', duration:2000, });
        }
    };
    
}
