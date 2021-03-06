//angular inports here
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

//app level imports here
import { NavigationModule } from './navigation/navigation.module';
import { DataTableModule } from './data-table/data-table.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './_services/api.service';
import { EditorModule } from '@tinymce/tinymce-angular';



//page inports here
import { HomePageComponent } from './home-page/home-page.component';
import { GenerateExamPageComponent } from './generate-exam-page/generate-exam-page.component';
import { SearchForAnExamPageComponent } from './search-for-an-exam-page/search-for-an-exam-page.component';
import { CreateExamPageComponent } from './create-exam-page/create-exam-page.component';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { CreateQuestionPageTopicSectionComponent } from './create-question-page/create-question-page-topic-section/create-question-page-topic-section.component';
import { CreateQuestionPageEditorSectionComponent } from './create-question-page/create-question-page-editor-section/create-question-page-editor-section.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RegistrationComponent } from './registration/registration.component';
import { DataTableComponent } from './data-table/data-table.component';

import { CommonFieldControlsService } from './_services/common-field-controls.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginDialogService } from './login/login-dialog.service';
import { UserService } from './_services/user.service';
import { EmailTakenAsyncValidatorDirective } from './registration/email-taken-async-validator.directive';
import { UsernameTakenAsyncValidatorDirective } from './registration/username-taken-async-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GenerateExamPageComponent,
    SearchForAnExamPageComponent,
    CreateExamPageComponent,
    CreateQuestionPageComponent,
    CreateQuestionPageTopicSectionComponent,
    CreateQuestionPageEditorSectionComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    EmailTakenAsyncValidatorDirective,
    UsernameTakenAsyncValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    NavigationModule,
    DataTableModule,
    MatCheckboxModule,
    FormsModule,
    EditorModule,
    MatSnackBarModule
],
  providers: [ ApiService, UserService, CommonFieldControlsService, LoginService, LoginDialogService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ LoginComponent ]
})
export class AppModule { }
