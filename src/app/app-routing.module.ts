// list angular imports where
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// list the components which will bet routed here
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoginComponent} from './login/login.component';

//question imports
/*
import { QuestionComponent } from './questions/question/question.component';
import { QuestionTopicsComponent } from './questions/question/question-topics/question-topics.component';
import { QuestionReferencesComponent } from './questions/question/question-references/question-references.component';
import { QuestionChoicesComponent } from './questions/question/question-choices/question-choices.component';
import { QuestionsComponent } from '../app/questions/questions.component';
import { QuestionChoiceComponent } from './questions/question/question-choices/question-choice/question-choice.component';
import { QuestionReferenceComponent } from './questions/question/question-references/question-reference/question-reference.component';
import { QuestionTopicComponent } from './questions/question/question-topics/question-topic/question-topic.component';
import { QuestionDifficultyComponent } from './questions/question/question-difficulties/question-difficulty.component';
import { QuestionTypeComponent } from './questions/question/question-types/question-type.component';

import { HttpInterceptorProviders} from './http-interceptors/index';
*/


//for each component page add the path, component, and pageTitle
const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent, data: {pageTitle: "Home Page"} },
//  { path: 'login', component: LoginComponent, data: {pageTitle: "loginIn"}},

  // add new pages for the router above this comment line.
  // the empty path should always list as 2nd to last path.
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  // Wild card route is always listed last and used when page is not found.
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes
      // for debugging uncomment the following line.
      //{ enableTracing: true }
      )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
