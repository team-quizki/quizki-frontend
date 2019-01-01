import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Location } from '@angular/common';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatDialogModule,
         MatExpansionModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatPaginatorModule,
         MatSelectModule,
         MatSidenavModule,
         MatSortModule,
         MatTableModule,
         MatToolbarModule
       } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { GenerateExamPageComponent } from './generate-exam-page/generate-exam-page.component';
import { SearchForAnExamPageComponent } from './search-for-an-exam-page/search-for-an-exam-page.component';
import { CreateExamPageComponent } from './create-exam-page/create-exam-page.component';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginDialogHostComponent } from './login-dialog-host/login-dialog-host.component';
import { LoginDialogHostService } from './login-dialog-host/login-dialog-host.service';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation.service';
import { DataTableComponent } from './data-table/data-table.component';

// TODO: Ask Johnathan if we even need the questions directory code any more?
// if not remove questions directory and associated imports and selectors
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionTopicComponent } from './questions/question/question-topics/question-topic/question-topic.component';
import { QuestionTopicsComponent } from './questions/question/question-topics/question-topics.component';
import { QuestionReferenceComponent } from './questions/question/question-references/question-reference/question-reference.component';
import { QuestionReferencesComponent } from './questions/question/question-references/question-references.component';
import { QuestionChoiceComponent } from './questions/question/question-choices/question-choice/question-choice.component';
import { QuestionChoicesComponent } from './questions/question/question-choices/question-choices.component';


describe('AppRoutingModule', () => {

  let appRoutingModule: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        CreateExamPageComponent,
        CreateQuestionPageComponent,
        DataTableComponent,
        GenerateExamPageComponent,
        HomePageComponent,
        LoginComponent,
        LoginDialogHostComponent,
        PageNotFoundComponent,
        NavigationComponent,
        RegistrationComponent,
        SearchForAnExamPageComponent,
        QuestionComponent,
        QuestionsComponent,
        QuestionTopicComponent,
        QuestionTopicsComponent,
        QuestionReferenceComponent,
        QuestionReferencesComponent,
        QuestionChoiceComponent,
        QuestionChoicesComponent
      ],
      providers: [
        {
          provide: NavigationService,
          useValue: {
            setPageTitle: jasmine.createSpy('setPageTitle')
          }
        },
        {
          provide: LoginDialogHostService,
          useValue: {
            setRouteOnCloseToUrl: jasmine.createSpy('setRouteOnCloseToUrl')
          }
        }
      ]
    });
    appRoutingModule = new AppRoutingModule();
  });

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('#app-routing navigate to "" redirects to /home-page', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home-page');
  }));

  xit('#app-routing navigate to "home-page" takes you to /home-page', fakeAsync(() => {
    router.navigate(['/home-page']);
    tick();
    expect(location.path()).toBe('/home-page');
  }));

  xit('#app-routing navigate to "generate-exam-page" takes you to /generate-exam-page', fakeAsync(() => {
    router.navigate(['/generate-exam-page']);
    tick();
    expect(location.path()).toBe('/generate-exam-page');
  }));

  xit('#app-routing navigate to "search-for-an-exam-page" takes you to /search-for-an-exam-page', fakeAsync(() => {
    router.navigate(['/search-for-an-exam-page']);
    tick();
    expect(location.path()).toBe('/search-for-an-exam-page');
  }));

  xit('#app-routing navigate to "create-question-page" takes you to /create-question-page', fakeAsync(() => {
    router.navigate(['/create-question-page']);
    tick();
    expect(location.path()).toBe('/create-question-page');
  }));

  xit('#app-routing navigate to "create-exam-page" takes you to /create-exam-page', fakeAsync(() => {
    router.navigate(['/create-exam-page']);
    tick();
    expect(location.path()).toBe('/create-exam-page');
  }));

  xit('#app-routing navigate to "login" takes you to /login', fakeAsync(() => {
    router.navigate(['/login']);
    tick();
    expect(location.path()).toBe('/login');
  }));

  xit('#app-routing navigate to ":dialog101/login" takes you to /:dialog101/login', fakeAsync(() => {
    router.navigate(['/:dialog101/login']);
    tick();
    expect(location.path()).toBe('/:dialog101/login');
  }));

  xit('#app-routing navigate to "registration" takes you to /registration', fakeAsync(() => {
    router.navigate(['/registration']);
    tick();
    expect(location.path()).toBe('/registration');
  }));

  it('#app-routing navigate to "**" takes you to /page-not-found', fakeAsync(() => {
    router.navigate(['/page-not-found']);
    tick();
    expect(location.path()).toBe('/page-not-found');
  }));

  it('#app-routing should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

});
