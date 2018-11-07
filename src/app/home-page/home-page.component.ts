import { Component, OnInit } from '@angular/core';

import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  onBtnClick() {
    this.apiService.post('/api/question', 
      {
      "userId": 1,
      "text": "To be or not to be, that is the question!",
      "description": "Testing create question endpoint",
      "type": 1,
      "topics": ["Shakespeare", "Existentialism", "Suicide"],
      "references": ["http://www.somesite.com/hamlet", "a plain text reference"],
      "difficulty": 1,
      "choices": [{"text":"To Be", "isCorrect":true}, {"text":"Not to be", "isCorrect":false}]
      })
      .subscribe((data) => {
          console.log(JSON.stringify(data));
    })
  }

}
