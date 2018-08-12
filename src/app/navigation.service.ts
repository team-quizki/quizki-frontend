import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private pageTitle: string;

  constructor(){
    this.pageTitle = "Welcome To Quizki"
  }

  setPageTitle(newPageTitle: string) {
    this.pageTitle = newPageTitle;
  }

  getPageTitle() {
    return this.pageTitle;
  }

}
