import { Component, OnInit, Input } from '@angular/core';
import {QuestionTopic} from "../questionTopicModel"

@Component({
  selector: 'app-question-topic',
  templateUrl: './question-topic.component.html',
  styleUrls: ['./question-topic.component.css']
})
export class QuestionTopicComponent implements OnInit {

  @Input() topic: QuestionTopic;

  constructor() { }

  ngOnInit() {
  }

  public getText() {
  	if (this.topic)
  		return this.topic.text;
  	else
  		return undefined;
  }
}
