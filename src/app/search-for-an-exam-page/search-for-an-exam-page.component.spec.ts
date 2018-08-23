import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForAnExamPageComponent } from './search-for-an-exam-page.component';

describe('SearchForAnExamPageComponent', () => {
  let component: SearchForAnExamPageComponent;
  let fixture: ComponentFixture<SearchForAnExamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForAnExamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForAnExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
