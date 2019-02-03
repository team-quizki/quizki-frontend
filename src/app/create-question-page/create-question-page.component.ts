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
    
    GETid:number = 1;                              // user ID placeholder, otherwise obtained from DB when user logs in.
    
    // Data Transfer Object
    createQuestionDataObj =
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
        this.createQuestionDataObj.userId = this.GETid;
    };
        
    //topicProperty = {};
    topicsDataObj(topicsData:{topics:[string], questionType:any, questionOverview:string}){
        console.log(JSON.stringify(topicsData.topics) + " " + topicsData.questionType + " " + topicsData.questionOverview);
        //this.createQuestionDataObj.topics.push(topicsData.topics);   
        this.createQuestionDataObj.topics = topicsData.topics;    
        this.createQuestionDataObj.type = topicsData.questionType;  
        this.createQuestionDataObj.description = topicsData.questionOverview;  
    }
        
    onSaveQuestions() {
        this.createQuestionDataObj.text = this.tinyMCEeditorData;  
        this.createQuestionDataObj.choices.length = 0;       
        this.createQuestionDataObj.choices.push({"text":this.answer1, "isCorrect":this.answer1isCorrect});
        this.createQuestionDataObj.choices.push({"text":this.answer2, "isCorrect":this.answer2isCorrect});
        this.createQuestionDataObj.choices.push({"text":this.answer3, "isCorrect":this.answer3isCorrect});
        this.createQuestionDataObj.choices.push({"text":this.answer4, "isCorrect":this.answer4isCorrect});
        
        this.createQuestionDataObj.references.push(this.reference1);
        this.createQuestionDataObj.references.push(this.reference2);
        this.createQuestionDataObj.references.push(this.reference3);
        this.createQuestionDataObj.references.push(this.reference4);
          
        this.apiService.post('/api/question', this.createQuestionDataObj)
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
        this.createQuestionDataObj.topics.length = 0;
        this.createQuestionDataObj.topics.push("default");
        this.createQuestionDataObj.references.length = 0;
        this.createQuestionDataObj.choices.length = 0;
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
