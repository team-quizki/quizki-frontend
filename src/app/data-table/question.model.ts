export class Question {
  public question: string;
  public topics: string;
  public type: string;
  public difficulty: string;
  public  answer: string;

  constructor(question: string, topics: string, type: string, difficulty: string, answer: string) {
    this.question = question;
    this.topics = topics;
    this.type = type;
    this.difficulty = difficulty;
    this.answer = answer;
  }
}
