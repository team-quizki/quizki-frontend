import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

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
