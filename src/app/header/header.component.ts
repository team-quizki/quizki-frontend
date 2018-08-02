//  The header component for all quizki pages

import { Component } from '@angular/core';

import { HeaderService } from './../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(
      private headerService: HeaderService
    ) {}

    pageTitle = this.headerService.getPageTitle();

    //  pageTitle = "Temp Page Title"
}
