import { Component, OnInit, Input } from '@angular/core';
import {QuestionTopic} from "./questionTopicModel"

@Component({
  selector: 'app-question-topics',
  templateUrl: './question-topics.component.html',
  styleUrls: ['./question-topics.component.css']
})
export class QuestionTopicsComponent implements OnInit {

  @Input() topics: QuestionTopic[];

  constructor() { }

  ngOnInit() {
  }
}
