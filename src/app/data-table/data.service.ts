import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Question } from './question.model';

@Injectable()
export class DataService {

  private questionsUpdated = new Subject<Question[]>();
  private questions: Question[] = [
    {question: 'What is the name of the first president?', topics: 'History', type: 'Single', difficulty: 'Junior', answer: 'George Washington', checked: false},
    {question: 'True or false: Mammals are warm blooded?', topics: 'Animals', type: 'Multiple', difficulty:'Junior', answer: 'True', checked: false},
    {question: 'True or false: Reptiles are warm blooded?', topics: 'Animals', type: 'Multiple', difficulty:'Junior', answer: 'False', checked: false},
    {question: 'First cartoon to air on telivision?', topics: 'Pop Culture', type: 'Phrase', difficulty:'Senior', answer: 'Fantasmagorie', checked: false},
    {question: 'Beethoven composed "Fur Elise"', topics: 'Music History', type: 'Phrase', difficulty:'Junior', answer: 'True', checked: false}
  ];

  private filteredQuestions: Question[] = this.questions;
  private checkedQuestions: Question[] = this.questions;
  allAreChecked = false;

  /**Filter Determinants *-------------------------------------------------------------------------------------------------------*/
  public byDifficulty = false;
  public byType = false;
  public byTopic = false;
  public byQuestionContains = false;

  /**Filter States *-------------------------------------------------------------------------------------------------------*/
  public difficulty = 'All';
  public type = 'All';
  public topic = '';
  public questionContains = '';

  /**Get Questions *-------------------------------------------------------------------------------------------------------*/
  getQuestions() {
    return [...this.filteredQuestions];
  }

  /**Activate Checked *-------------------------------------------------------------------------------------------------------*/
  activateChecked(question, i) {
    this.checkedQuestions = this.questions;
    this.checkedQuestions[i].checked === false ? this.checkedQuestions[i].checked = true : this.checkedQuestions[i].checked = false;
    console.log(this.checkedQuestions);
    this.questionsUpdated.next([...this.checkedQuestions]);
  }

  /**Activate All Checked *-------------------------------------------------------------------------------------------------------*/
  activateAllChecked() {
    this.checkedQuestions.map(question => {
      if (this.allAreChecked === false) {
        return question.checked = true;
      }
      return question.checked = false;
    });
    this.allAreChecked === false ? this.allAreChecked = true : this.allAreChecked = false;
    this.questionsUpdated.next([...this.checkedQuestions]);
    console.log(this.checkedQuestions);
  }

  /**Main Filter *---------------------------------------------------------------------------------------------------------------*/
  activateFilter() {

    /**reset filter----*/
    this.filteredQuestions = this.questions;

    /**difficulty filter----*/
    if (this.byDifficulty === true) {
      this.difficulty = this.difficulty.toLowerCase();
      this.filteredQuestions = this.filteredQuestions.filter((question) => {
        return question.difficulty.toLowerCase() === this.difficulty;
      });
    }
    /**type filter----*/
    if (this.byType === true) {
      this.type = this.type.toLowerCase();
      this.filteredQuestions = this.filteredQuestions.filter((question) => {
        return question.type.toLowerCase() === this.type;
      });
    }
    /**topic filter----*/
    if (this.byTopic === true) {
      this.topic = this.topic.toLowerCase();
      this.filteredQuestions = this.filteredQuestions.filter((question) => {
        return question.topics.toLowerCase().includes(this.topic);
      });
    }
    /**quesitonContains filter----*/
    if (this.byQuestionContains === true) {
      this.questionContains = this.questionContains.toLowerCase();
      this.filteredQuestions = this.filteredQuestions.filter((question) => {
        return question.question.toLowerCase().includes(this.questionContains);
      });
    }
    this.questionsUpdated.next([...this.filteredQuestions]);
  }

  /**Update Listener *------------------------------------------------------------------------------------------------------------*/
  getQuestionUpdateListener() {
    return this.questionsUpdated.asObservable();
  }

  constructor() {}

}
