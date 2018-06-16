import { Component, OnInit, Input } from '@angular/core';
import {QuestionReference} from "./questionReferenceModel";

@Component({
  selector: 'app-question-references',
  templateUrl: './question-references.component.html',
  styleUrls: ['./question-references.component.css']
})
export class QuestionReferencesComponent implements OnInit {

  @Input() references: QuestionReference[];

  constructor() { }

  ngOnInit() {
  }
}
