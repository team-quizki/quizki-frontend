import {Question} from "../questions/questionModel"
import {QuestionChoice} from "../questions/question/question-choices/questionChoiceModel"
import {QuestionDifficulties} from "../questions/question/question-difficulties/questionDifficultiesEnum"
import {QuestionReference} from "../questions/question/question-references/questionReferenceModel"
import {QuestionTopic} from "../questions/question/question-topics/questionTopicModel"
import {QuestionTypes} from "../questions/question/question-types/questionTypesEnum"




export class TestData {

  //test data has been created by capturing JSON responses to getQuestionById() requests to Quizki
  //individually and editing the data into the object as it appears below. It is NOT in the shape
  //that would be expected when requesting a list of questions.

  private questions =   {

    "multiple": { "question": [{"references":[{"text":"oceb fundamental book, chapter 2, p19","id":85},{"text":"quickmba.com\/accounting\/mgmt\/balanced-scorecard\/","id":84}],"type_id":"2","type_text":"Multiple","topics":[{"text":"analysis methods","id":145},{"text":"chapter 2","id":20},{"text":"balanced scorecard","id":171},{"text":"oceb fundamental","id":19},{"text":"swot","id":78}],"user_name":"johnathan","description":"Test Question Multiple","textWithoutHTML":"Which of these analysis methods deals with&nbsp;aspects internally and externally relevant to the organization?","difficulty_id":"1","difficulty_text":"Junior","entityStatus":0,"user_id":"1","dynamicDataFieldNames":[],"id":"370","text":"<p>Which of these analysis methods deals with&nbsp;aspects internally and externally relevant to the organization?<\/p>","choices":[{"sequence":"0","iscorrect":"true","id":"1086","text":"SWOT"},{"sequence":"0","iscorrect":"false","id":"1090","text":"Market Segmentation"},{"sequence":"0","iscorrect":"false","id":"1087","text":"Porter's Five Forces"},{"sequence":"0","iscorrect":"false","id":"1088","text":"STEP"},{"sequence":"0","iscorrect":"true","id":"1089","text":"Balanced Scorecard"}]}] },

    "phrase": { "question": [{"references":[],"type_id":"3","type_text":"Phrase","topics":[{"text":"marketing","id":104},{"text":"chapter 2","id":20},{"text":"business functions, markets, and strategies","id":21},{"text":"oceb fundamental","id":19}],"user_name":"johnathan","description":"Test Question Phrase","textWithoutHTML":"Marketing is the realization of enterprise goals and the alignment of the entire enterprise in the market.","difficulty_id":"1","difficulty_text":"Junior","entityStatus":0,"user_id":"1","dynamicFieldToBeBlankedOut":"1","dynamicDataFieldNames":["dynamicFieldToBeBlankedOut"],"id":"119","text":"<p>Marketing is the [[realization]] of enterprise [[goals]] and the [[alignment]] of the entire enterprise in the market.<\/p>","choices":[{"sequence":"0","iscorrect":"true","id":"390","text":"alignment"},{"sequence":"0","iscorrect":"true","id":"389","text":"realization"},{"sequence":"0","iscorrect":"true","id":"388","text":"False"}]}] },

    "sequence": { "question": [{"references":[{"text":"oceb fundamental book, chapter 7, p128","id":95}],"type_id":"4","type_text":"Sequence","topics":[{"text":"VRM","id":181},{"text":"Quality Frameworks","id":176},{"text":"chapter 7","id":165},{"text":"oceb fundamental","id":19}],"user_name":"johnathan","description":"Test Question Sequence","textWithoutHTML":"Put these levels of the VRM in hierarchical order..","difficulty_id":"1","difficulty_text":"Junior","entityStatus":0,"user_id":"1","dynamicDataFieldNames":[],"id":"417","text":"<p>Put these levels of the VRM in hierarchical order..<\/p>","choices":[{"sequence":"3","iscorrect":"true","id":"1250","text":"Operational"},{"sequence":"1","iscorrect":"true","id":"1251","text":"Strategic"},{"sequence":"2","iscorrect":"true","id":"1249","text":"Tactical"}]}] },

    "set": { "question": [{"references":[{"text":"oceb fundamental book, chapter 6, p95","id":57}],"type_id":"5","type_text":"Set","topics":[{"text":"BPMN","id":155},{"text":"chapter 6","id":154},{"text":"oceb fundamental","id":19},{"text":"activities","id":159}],"user_name":"johnathan","description":"Test Question Set","textWithoutHTML":"The eight predefined task types in BPMN...","difficulty_id":"1","choiceIdsToBeAnswered":"723;-1","difficulty_text":"Junior","entityStatus":0,"user_id":"1","dynamicDataFieldNames":["choiceIdsToBeAnswered"],"id":"254","text":"<p>The eight predefined task types in BPMN...<\/p>","choices":[{"sequence":"0","iscorrect":"false","id":"722","text":"Reference"},{"sequence":"0","iscorrect":"false","id":"726","text":"Receive"},{"sequence":"0","iscorrect":"true","id":"725","text":"Manual"},{"sequence":"0","iscorrect":"false","id":"724","text":"Service"},{"sequence":"0","iscorrect":"false","id":"727","text":"Send"},{"sequence":"0","iscorrect":"false","id":"982","text":"User"},{"sequence":"0","iscorrect":"false","id":"728","text":"Script"},{"sequence":"0","iscorrect":"false","id":"723","text":"None"}]}] },

    "single": { "question": [{"references":[{"text":"Reference 1","id":123},{"text":"Reference 2","id":456}],"type_id":"1","type_text":"Single","topics":[{"text":"trading","id":10},{"text":"options","id":12},{"text":"commodities","id":11}],"user_name":"johnathan","description":"Test Question Single","textWithoutHTML":"A&nbsp;listed option is a put or call that an exchange has authorized for trading.","difficulty_id":"1","difficulty_text":"Junior","entityStatus":0,"user_id":"1","dynamicDataFieldNames":[],"id":"11","text":"<p>A&nbsp;<strong>listed option<\/strong> is a put or call that an exchange has authorized for trading.<\/p>","choices":[{"sequence":"1","iscorrect":"true","id":"28","text":"True"},{"sequence":"2","iscorrect":"false","id":"27","text":"False"}]}] }

  }

  public getQuestions (): Question[]{

    //this function returns an array of questions, one of each type for testing

    let rtnQuestions: Question[] = [];

    let types: string[] = ["single", "multiple", "phrase", "sequence", "set"];

    for (let type of types){

      let data = this.questions[type];
      let questionData = data["question"][0];
      rtnQuestions.push(this.parseQuestionJson(questionData));

    }

    return rtnQuestions;


  }




  public getQuestionByType (type: string): Question{

    //this function provides a Question object for testing using JSON data as sent in response
    //to a Quizki request for a single question by id

    let rtn: Question;
    //get the question[] from the data object and extract the question object
    //from the array
    let data = this.questions[type];
    let questionData = data["question"][0];

    //get the Question from the json data
    rtn = this.parseQuestionJson(questionData);

    return rtn;

  }

  private parseQuestionJson(json: Object): Question {

    //this functions parses the JSON data sent in Quizki get question responses
    //returns a Question object

    //can you see this change??


    let rtn: Question;

    //create the model arrays
    var qtopics: QuestionTopic[] = [];
    var choices: QuestionChoice[] = [];
    var references: QuestionReference[] = [];

    //create the enums and initialize them to an unused default

    let difficulty: QuestionDifficulties = QuestionDifficulties.notdefined;
    let qtype: QuestionTypes = QuestionTypes.all;

    //initialize to refactored variable
    let questionData = json;

    //extract the references from the JSON data if any, refs are optional
    if (questionData["references"] !== undefined){
      for (let ref of questionData["references"]){
        let refModel = new QuestionReference(ref["id"], ref["text"]);
        references.push(refModel);
      }
    } else {
      references = null;
    }
    //next extract the topics from the data, there must be at least one
    for (let top of questionData["topics"]){
      let topModel = new QuestionTopic(top["id"], top["text"]);
      qtopics.push(topModel);
    }
    //next extract the choices from the data in the order received
    //there are always choices!!!
    for (let choice of questionData["choices"]){
      let choiceModel = new QuestionChoice(choice["id"], choice["text"], choice["iscorrect"], choice["sequence"]);
      choices.push(choiceModel);
    }

    //set the difficulty enum using the string value in questionData
    //and replace the use of undefined in Quizki with notdefined

    let diffString: string = questionData["difficulty_text"] == "undefined" ? "notdefined" : questionData["difficulty_text"];
    if( diffString in QuestionDifficulties) difficulty = QuestionDifficulties[diffString];

    //and set the type enum using the string value

    let typeString: string = questionData["type_text"];
    //if( typeString in QuestionTypes) qtype = QuestionTypes[typeString];
    //Quizki type names are capitalized but are displayed in lowercase using the enum
    qtype = QuestionTypes[typeString.toLowerCase()];


    //at this point there are all the components to build a Question

    rtn = new Question(
      questionData["id"],
      qtype,
      questionData["user_name"],
      questionData["textWithoutHTML"],
      questionData["description"],
      difficulty,
      qtopics,
      references,
      choices);

    //and we can return the result

    return rtn;


  }
}
