import {QuestionTopic} from "./question/question-topics/questionTopicModel"
import {QuestionReference} from "./question/question-references/questionReferenceModel"
import {QuestionChoice} from "./question/question-choices/questionChoiceModel"
import {QuestionTypes} from "./question/question-types/questionTypesEnum"
import {QuestionDifficulties} from "./question/question-difficulties/questionDifficultiesEnum"

export class Question {
  constructor(
    public id: number,
    public type: QuestionTypes,
    public user: string,
    public text: string,
    public description: string,
    public difficulty: QuestionDifficulties,
    public topics: QuestionTopic[],
    public references: QuestionReference[],
    public choices: QuestionChoice[]
  ){}
}
