// list angular imports where
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// list the components which will bet routed here
import { HomePageComponent } from './home-page/home-page.component';
import { GenerateExamPageComponent } from './generate-exam-page/generate-exam-page.component';
import { SearchForAnExamPageComponent } from './search-for-an-exam-page/search-for-an-exam-page.component';
import { CreateExamPageComponent } from './create-exam-page/create-exam-page.component';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { CreateQuestionPageTopicSectionComponent } from './create-question-page/create-question-page-topic-section/create-question-page-topic-section.component';
import { CreateQuestionPageEditorSectionComponent } from './create-question-page/create-question-page-editor-section/create-question-page-editor-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent} from './registration/registration.component';
import { NavigationService } from './navigation.service';

// for each component page add the path, component, and pageTitle
export const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent, data: {pageTitle: 'Home'} },
  { path: 'generate-exam-page', component: GenerateExamPageComponent, data: {pageTitle: 'Generate Exam'} },
  { path: 'search-for-an-exam-page', component: SearchForAnExamPageComponent, data: {pageTitle: 'Search for an Exam'} },
  { path: 'create-question-page', component: CreateQuestionPageComponent, data: {pageTitle: 'Create Question'},
    children: [
      { path: '', component: CreateQuestionPageTopicSectionComponent },
      { path: '', component: CreateQuestionPageEditorSectionComponent }
    ]
  },

  { path: 'create-exam-page', component: CreateExamPageComponent, data: {pageTitle: 'Create Exam'} },
  { path: 'registration', component: RegistrationComponent, data: {pageTitle: 'Register'} },

  // add new pages for the router above this comment line.
  // the empty path should always list as 2nd to last path.
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  // Wild card route is always listed last and used when page is not found.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes,
      // to see the router events change enableTracing: true
      // { enableTracing: false }
      )
  ],
  exports: [ RouterModule ],
  providers: [ NavigationService ]
})

export class AppRoutingModule { }
