import { Component, OnInit, Input } from '@angular/core';
import {Question} from "../questionModel"
import {QuestionDifficulties} from "./question-difficulties/questionDifficultiesEnum"
import {QuestionChoice} from "./question-choices/questionChoiceModel"
import {QuestionReference} from "./question-references/questionReferenceModel"
import {QuestionTopic} from "./question-topics/questionTopicModel"
import {QuestionTypes} from "./question-types/questionTypesEnum"




@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  type: QuestionTypes
  topics: QuestionTopic[]
  references: QuestionReference[]
  choices: QuestionChoice[]
  difficulty: QuestionDifficulties

  constructor() { }

  ngOnInit() {
    this.type = this.question.type;
    this.topics = this.question.topics;
    this.references = this.question.references;
    this.choices = this.question.choices;
    this.difficulty = this.question.difficulty;
  }

  public getQuestionTypeString(index: number){
    return QuestionTypes[index];
  }

  public getQuestionDifficultyString(index: number){
    return QuestionDifficulties[index];
  }

  public processQuestionText(text: string){
    return text.replace("&nbsp;","__________")
  }
}
