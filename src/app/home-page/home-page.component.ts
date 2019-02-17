import { Component, OnInit } from '@angular/core';
//TODO Remove these 2 imports
import { UserService } from './../_services/user.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

// TODO remmove loginservice below
  constructor( private userService: UserService) { }

  ngOnInit() { }

  // TODO: Remove these lines when done, it is just used to verify data capturing to correct variable
  verifyGetCurrentUser($event){
    let currentUser = this.userService.getCurrentUser();
    console.log( "In HomePageComponent: getCurrentUser is: " + JSON.stringify(currentUser));
  }

}
