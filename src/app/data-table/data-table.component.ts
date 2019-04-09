import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';
import { Question} from './question.model';
import { Subscription} from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  /** Vars *---------------------------------------------------------------------------------------------------------------*/
  examForm: FormGroup;
  selectedType: string;
  selectedDifficulty: string;
  displayedColumns = ['question', 'topics', 'type', 'difficulty'];
  dataSource = [];
  difficulties = ['All', 'Junior', 'Intermediate', 'Senior', 'Guru'];
  types = ['All', 'Single', 'Multiple', 'Phrase', 'Sequence', 'Set'];
  myQuestions = ['All', 'Mine', 'Selected'];
  questionSub: Subscription;

  /** Necessary for Checkbox *---------------------------------------------------------------------------------------------------------------*/
  selection = new SelectionModel<Question>(true, []);

  /** Constructor *---------------------------------------------------------------------------------------------------------------*/
  constructor(private dataService: DataService) {
  }

  /**NgOnInit *---------------------------------------------------------------------------------------------------------------*/
  ngOnInit() {
    this.initForm();
    this.dataSource = this.dataService.getQuestions();
    this.questionSub = this.dataService.getQuestionUpdateListener()
      .subscribe((questions: Question[]) => {
        this.dataSource = questions;
      });
  }

  /**Functions *---------------------------------------------------------------------------------------------------------------*/
  private initForm() {
    const examTitle = '';
    const examDescription = '';
    this.examForm = new FormGroup({
      'title': new FormControl(examTitle),
      'description': new FormControl(examDescription)
    });
  }

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

  onClickAll() {
    this.dataService.activateAllChecked();
  }

  onClick(question, i) {
    this.dataService.activateChecked(question, i);
  }

  onSubmit() {
    console.log(this.examForm.value['description']);
    console.log(this.examForm.value['title']);
    console.log(this.getSelectedOptions());
  }

  getSelectedOptions() { // right now: ['1','3']
    return this.dataSource
      .filter(question => question.checked);
    //.map(question => question.value);
  }
}
