import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 
          MatFormFieldModule,
          MatInputModule,
          MatOptionModule,
          MatSelectModule,
          MatTableModule
        } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateExamPageComponent } from './create-exam-page.component';
import { DataTableComponent } from '../data-table/data-table.component'
import { DataService } from '../data-table/data.service';

describe('CreateExamPageComponent', () => {
  let component: CreateExamPageComponent;
  let fixture: ComponentFixture<CreateExamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTableModule, ReactiveFormsModule ],
      declarations: [ CreateExamPageComponent, DataTableComponent ],
      providers: [
        {
          provide: DataService, 
          useValue: { 
            getQuestions: jasmine.createSpy('getQuestions'),
            activateFilter: jasmine.createSpy('activateFilter'),
            getQuestionUpdateListener: () => { return { subscribe: () => {}}}
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
