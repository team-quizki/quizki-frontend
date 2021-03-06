import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Location } from '@angular/common';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { GenerateExamPageComponent } from './generate-exam-page/generate-exam-page.component';
import { SearchForAnExamPageComponent } from './search-for-an-exam-page/search-for-an-exam-page.component';
import { CreateExamPageComponent } from './create-exam-page/create-exam-page.component';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { CreateQuestionPageTopicSectionComponent } from './create-question-page/create-question-page-topic-section/create-question-page-topic-section.component';
import { CreateQuestionPageEditorSectionComponent } from './create-question-page/create-question-page-editor-section/create-question-page-editor-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation.service';
import { DataTableModule } from './data-table/data-table.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoginDialogService } from './login/login-dialog.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './_services/api.service';

describe('AppRoutingModule', () => {

  let appRoutingModule: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
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
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        EditorModule,
        HttpClientModule,
        HttpClientTestingModule,
        DataTableModule
      ],
      declarations: [
        AppComponent,
        CreateExamPageComponent,
        CreateQuestionPageComponent,
        CreateQuestionPageTopicSectionComponent,
        CreateQuestionPageEditorSectionComponent,
        GenerateExamPageComponent,
        HomePageComponent,
        PageNotFoundComponent,
        NavigationComponent,
        RegistrationComponent,
        SearchForAnExamPageComponent
      ],
      providers: [ ApiService,
        {
          provide: NavigationService,
          useValue: {
            setPageTitle: jasmine.createSpy('setPageTitle')
          }
        },
        {
          provide: LoginDialogService,
          useValue: {
            openLoginDialog: jasmine.createSpy('openLoginDialog')
          }
        }
      ]
    }).compileComponents();
    appRoutingModule = new AppRoutingModule();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  });

  it('#app-routing navigate to "" redirects to /home-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home-page');
          });
      });
  }));

  it('#app-routing navigate to "home-page" takes you to /home-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/home-page']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home-page');
          });
      });
  }));

  it('#app-routing navigate to "generate-exam-page" takes you to /generate-exam-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/generate-exam-page']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/generate-exam-page');
          });
      });
  }));

  it('#app-routing navigate to "search-for-an-exam-page" takes you to /search-for-an-exam-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/search-for-an-exam-page']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/search-for-an-exam-page');
          });
      });
  }));

  it('#app-routing nnavigate to "create-question-page" takes you to /create-question-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/create-question-page']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/create-question-page');
          });
      });
  }));

  it('#app-routing nnavigate to "create-exam-page" takes you to /create-exam-page', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/create-exam-page']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/create-exam-page');
          });
      });
  }));

  it('#app-routing navigate to "registration" takes you to /registration', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/registration']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/registration');
          });
      });
  }));

  it('#app-routing navigate to "**" takes you to /page-not-found', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/page-not-found']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/page-not-found');
          });
      });
  }));

  it('#app-routing should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

});
