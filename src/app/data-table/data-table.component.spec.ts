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

import { DataTableComponent } from './data-table.component';
import { DataService } from './data.service';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      imports: [ FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule, ReactiveFormsModule ],
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

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
