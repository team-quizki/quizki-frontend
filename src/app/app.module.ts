import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatToolbarModule, MatButtonModule, MatIconModule  } from '@angular/material';

import { AppComponent } from './app.component';
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
import { LoginComponent} from './login/login.component';
import { HttpInterceptorProviders} from './http-interceptors/index';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component'

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionTopicsComponent,
    QuestionReferencesComponent,
    QuestionChoicesComponent,
    QuestionsComponent,
    QuestionChoiceComponent,
    QuestionReferenceComponent,
    QuestionTopicComponent,
    QuestionDifficultyComponent,
    QuestionTypeComponent,
    LoginComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ HttpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
