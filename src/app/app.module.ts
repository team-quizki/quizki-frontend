//angular imports here
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { EditorModule } from '@tinymce/tinymce-angular';

//angular Material imports here
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule } from '@angular/material';

//app level imports here
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

//page imports here
import { HomePageComponent } from './home-page/home-page.component';
import { GenerateExamPageComponent } from './generate-exam-page/generate-exam-page.component';
import { SearchForAnExamPageComponent } from './search-for-an-exam-page/search-for-an-exam-page.component';
import { CreateExamPageComponent } from './create-exam-page/create-exam-page.component';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataTableComponent } from './data-table/data-table.component';

//question imports
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
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD
import { FirebaseService } from './create-question-page/firebase.service';
=======
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
>>>>>>> 63e2d1bf605236ed5bd05d9eb2894a08a7d1eaa9

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
    NavigationComponent,
    HomePageComponent,
    GenerateExamPageComponent,
    SearchForAnExamPageComponent,
    CreateExamPageComponent,
    CreateQuestionPageComponent,
    PageNotFoundComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
<<<<<<< HEAD
    EditorModule
=======
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
>>>>>>> 63e2d1bf605236ed5bd05d9eb2894a08a7d1eaa9
  ],
  providers: [ HttpInterceptorProviders, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
