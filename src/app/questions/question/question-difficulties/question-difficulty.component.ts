import { Component, OnInit, Input } from '@angular/core';
import {QuestionDifficulties} from "./questionDifficultiesEnum"

@Component({
  selector: 'app-question-difficulty',
  templateUrl: './question-difficulty.component.html',
  styleUrls: ['./question-difficulty.component.css']
})
export class QuestionDifficultyComponent implements OnInit {

  @Input() difficulty: QuestionDifficulties;

  constructor() { }

  ngOnInit() {
  }

}
