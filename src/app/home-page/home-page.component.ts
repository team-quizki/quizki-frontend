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
  	this.apiService.post('http://localhost:8080/api/users/isUnique', {name: 'johnathan'}).subscribe((data) => {
  		console.log(JSON.stringify(data));
  	})
  }

}
