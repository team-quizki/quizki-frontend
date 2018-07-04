import { Component, OnInit, Input } from '@angular/core';
import {QuestionChoice} from "./questionChoiceModel"

@Component({
  selector: 'app-question-choices',
  templateUrl: './question-choices.component.html',
  styleUrls: ['./question-choices.component.css']
})
export class QuestionChoicesComponent implements OnInit {

  @Input() choices: QuestionChoice[]
  constructor() { }
  ngOnInit() {
  }
}
