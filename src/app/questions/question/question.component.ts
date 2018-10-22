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
    if (this.question) {
      this.type = this.question.type;
      this.topics = this.question.topics;
      this.references = this.question.references;
      this.choices = this.question.choices;
      this.difficulty = this.question.difficulty;
    }
  }

  public getQuestionTypeString(index: number){
    if (this.question)
      return QuestionTypes[this.question.type];
    else
      return undefined;
  }

  public getQuestionDifficultyString(index: number){
    if (this.question)
      return QuestionTypes[this.question.difficulty];
    else
      return undefined;
  }

  public processQuestionText(text: string){
    return text.replace("&nbsp;","__________")
  }

  public getId() {
    if (this.question)
      return this.question.id;
    else
      return -1;
  }

  public getUser() {
    if (this.question)
      return this.question.user;
    else
      return undefined;
  }

  public getTopics() {
    if (this.question)
      return this.question.topics;
    else
      return [];
  }

  public getReferences() {
    if (this.question)
      return this.question.references;
    else
      return [];
  }

  public getChoices() {
    if (this.question)
      return this.question.choices;
    else
      return [];
  }

  public getText() {
    if (this.question)
      return this.question.text;
    else
      return '';
  }

  public getDescription() {
    if (this.question)
      return this.question.description;
    else
      return '';
  }
}
