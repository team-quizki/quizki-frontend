import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';
import { Question} from './question.model';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  /** Vars *---------------------------------------------------------------------------------------------------------------*/
  selectedType: string;
  selectedDifficulty: string;
  selectedMyQuestion: string;
  displayedColumns = ['question', 'topics', 'type', 'difficulty'];
  dataSource = [];
  difficulties = ['All', 'Junior', 'Intermediate', 'Senior', 'Guru'];
  types = ['All', 'Single', 'Multiple', 'Phrase', 'Sequence', 'Set'];
  myQuestions = ['All', 'Mine', 'Selected'];
  questionSub: Subscription;

  /** Constructor *---------------------------------------------------------------------------------------------------------------*/
  constructor(private dataService: DataService) {
  }

  /**NgOnInit *---------------------------------------------------------------------------------------------------------------*/
  ngOnInit() {
    this.dataSource = this.dataService.getQuestions();
    this.questionSub = this.dataService.getQuestionUpdateListener()
      .subscribe((questions: Question[]) => {
        this.dataSource = questions;
      });

  }

  /**Functions *---------------------------------------------------------------------------------------------------------------*/
  filterByType(type) {
    if (type === 'All') {
      this.dataService.byType = false;
    } else {
      this.dataService.byType = true;
    }
    this.dataService.type = type;
    this.dataService.activateFilter();
  }

  filterByDifficulty(difficulty) {
    if (difficulty === 'All') {
      this.dataService.byDifficulty = false;
    } else {
      this.dataService.byDifficulty = true;
    }
      this.dataService.difficulty = difficulty;
      this.dataService.activateFilter();
  }

  filterByTopic(topic) {
    if (topic === '') {
      this.dataService.byTopic = false;
    } else {
      this.dataService.byTopic = true;
    }
    this.dataService.topic = topic;
    this.dataService.activateFilter();
  }

  filterByQuestion(questionContains) {
    if (questionContains === '') {
      this.dataService.byQuestionContains = false;
    } else {
      this.dataService.byQuestionContains = true;
    }
    this.dataService.questionContains = questionContains;
    this.dataService.activateFilter();
  }


}
