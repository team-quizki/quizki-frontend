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

  public getIsCorrectString(isCorrect: string){
    if(isCorrect.toLowerCase() == "false")
      return "Incorrect";
    else
      return "Correct";
  }
}
