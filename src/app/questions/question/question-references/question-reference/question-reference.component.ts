import { Component, OnInit, Input } from '@angular/core';
import {QuestionReference} from "../questionReferenceModel"

@Component({
  selector: 'app-question-reference',
  templateUrl: './question-reference.component.html',
  styleUrls: ['./question-reference.component.css']
})
export class QuestionReferenceComponent implements OnInit {

  @Input() reference: QuestionReference;

  constructor() { }

  ngOnInit() {
  }

  public getText() {
  	if (this.reference)
  		return this.reference.text;
  	else
  		return undefined;
  }

}
