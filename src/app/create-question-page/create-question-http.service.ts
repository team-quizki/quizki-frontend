import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
    
    constructor(private http: HttpClient){}
    storeQuestions(questions2: any[]) {
        // alert(questions[0].desc);
        // console.log(JSON.stringify(questions));
        // this.wtf = JSON.stringify(questions);
        // const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});
        const headers = new HttpHeaders({   'Content-Type':'application/json', 
                                            'Access-Control-Allow-Origin':'http://localhost:4200',
                                            'Access-Control-Allow-Credentials':'true',
                                            'Access-Control-Allow-Methods':'POST, GET, HEAD, OPTIONS, DELETE',
                                            'Access-Control-Allow-Headers':'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'});
        
        
        // return this.http.post('https://quizki-mockdb-01.firebaseio.com/data.json', questions, {headers:headers});
        //return this.http.post('https://quizki-mockdb-01.firebaseio.com/data.json', questions2, {headers:headers});
        return this.http.post('http://localhost:8080/api/question', questions2, {headers:headers});
    }
    
    
    // https://angular.io/guide/rx-library#operators
    getQuestions(){
        return this.http.get('https://quizki-mockdb-01.firebaseio.com/data.json')
        //.pipe(
        //    map((response: HttpResponse<any[]>) => {
        //        const data = response;
        //        return data;
        //    })
        //    )
    }
    
}

// This error shows when I try to use the map feature as per its use in firebase.service.ts 
/* 
ERROR in src/app/app.component.ts(65,13): error TS2345: Argument of type '(theQuestions: any[]) => void' is not assignable to parameter of type '(value: HttpResponse<any[]>) => void'.
  Types of parameters 'theQuestions' and 'value' are incompatible.
    Type 'HttpResponse<any[]>' is not assignable to type 'any[]'.
      Property 'includes' is missing in type 'HttpResponse<any[]>'.
*/