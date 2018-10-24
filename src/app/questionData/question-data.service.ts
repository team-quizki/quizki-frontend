import { Injectable } from '@angular/core';
import {TestData} from "./data"

@Injectable()
export class QuestionDataService {

  testdata: TestData;

  constructor() {
    this.testdata = new TestData();
  }

  getQuestionTypeData (type: string){
    return this.testdata.getQuestionByType(type);
  }

  getQuestions(){
    return this.testdata.getQuestions();
  }

}
