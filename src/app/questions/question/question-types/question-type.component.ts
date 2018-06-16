import { Component, OnInit, Input } from '@angular/core';
import {QuestionTypes} from "./questionTypesEnum"

@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.css']
})
export class QuestionTypeComponent implements OnInit {

  @Input() type: QuestionTypes;

  constructor() { }

  ngOnInit() {
  }

}
