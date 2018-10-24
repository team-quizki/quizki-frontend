import { Component, OnInit, Input } from '@angular/core';
import {QuestionChoice} from "../questionChoiceModel";

@Component({
  selector: 'app-question-choice',
  templateUrl: './question-choice.component.html',
  styleUrls: ['./question-choice.component.css']
})
export class QuestionChoiceComponent implements OnInit {

  @Input() choice: QuestionChoice;

  constructor() { }

  ngOnInit() {
    console.log(this.choice);
  }

  public getIsCorrectString(){
    if (this.choice)
      if(this.choice.isCorrect)
        return "Correct";
      else
        return "Incorrect";
    else
      return undefined;
  }

  public getId() {
    if (this.choice)
      return this.choice.id;
    else
      return -1;
  }

  public getText() {
    if (this.choice)
      return this.choice.text;
    else
      return '';
  }

  public getSequence() {
    if (this.choice)
      return this.choice.sequence;
    else
      return -1;
  }

  public getIsCorrect() {
    if (this.choice)
      return this.choice.isCorrect;
    else
      return false;
  }

}
