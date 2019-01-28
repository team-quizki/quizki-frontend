import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-create-question-page-topic-section',
    templateUrl:'./create-question-page-topic-section.component.html',
    styleUrls: ['../create-question-page.component.css']
})

export class CreateQuestionPageTopicSectionComponent {
    currentTopic:string = "";
    newTopic:string = ""; 
    briefQuestionDesc:string = "Question overview";
    
    topicData = {topic:"default", questionType:1, questionOverview:"Question overview default"};
    
    topics = [
        {value: 'topic-0', viewValue: 'Topic 0'},   // topics placeholder, otherwise obtained from DB when user loads page.  
        {value: 'topic-1', viewValue: 'Topic 1'},
        {value: 'topic-2', viewValue: 'Topic 2'},
        {value: 'topic-3', viewValue: 'Topic 3'},
        {value: 'topic-4', viewValue: 'Topic 4'},
        {value: 'topic-5', viewValue: 'Topic 5'}
    ];
    
    questionType = [
        {value: "1",    viewValue: 'Single',   notAvailable: false},
        {value: "2",    viewValue: 'Multiple', notAvailable: true},
        {value: "3",    viewValue: 'Phrase',   notAvailable: true},
        {value: "4",    viewValue: 'Sequence', notAvailable: true},
        {value: "5",    viewValue: 'Set',      notAvailable: true}
    ];
    
    @Output() topicDataObj = new EventEmitter<{}>();
    
    updateCurrentTopic(){
            this.topicData.topic = this.newTopic;
            this.topicDataObj.emit(this.topicData);
        }    

    clickedTopic(topicChoice:any){
            this.topicData.topic = topicChoice;
            this.topicDataObj.emit(this.topicData);
        }    

    clickedQuestionType(questionType:any){
            this.topicData.questionType = questionType;
            this.topicDataObj.emit(this.topicData);
        };    
}