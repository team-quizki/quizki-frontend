import { Component } from '@angular/core';

@Component({
    selector:'app-create-question-page-part1',
    templateUrl:'./create-question-page-part1.component.html',
    styleUrls: ['../create-question-page.component.css']
})

export class CreateQuestionPageComponentPart1 {
    currentTopic:string = "";
    
    
topics = [
    {value: 'topic-0', viewValue: 'Topic 0'},   // topics placeholder, otherwise obtained from DB when user loads page.  
    {value: 'topic-1', viewValue: 'Topic 1'},
    {value: 'topic-2', viewValue: 'Topic 2'},
    {value: 'topic-3', viewValue: 'Topic 3'},
    {value: 'topic-4', viewValue: 'Topic 4'},
    {value: 'topic-5', viewValue: 'Topic 5'}
];

clickedTopic(topicChoice:any){
        this.currentTopic = topicChoice;
    }    
    
    
    
}