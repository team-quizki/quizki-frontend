import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class CreateQuestionHTTPService {
    
    constructor(private http: HttpClient){}
    storeQuestions(questions2: any[]) {
        
        const headers = new HttpHeaders({'Content-Type':'application/json'});
                                            
        return this.http.post('http://localhost:8080/api/question', questions2, {headers:headers});
    }
    
    // https://angular.io/guide/rx-library#operators
    getQuestions(){
        return this.http.get('https://quizki-mockdb-01.firebaseio.com/data.json')
    }
    
}

