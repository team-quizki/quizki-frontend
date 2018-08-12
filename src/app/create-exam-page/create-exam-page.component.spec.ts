import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamPageComponent } from './create-exam-page.component';

describe('CreateExamPageComponent', () => {
  let component: CreateExamPageComponent;
  let fixture: ComponentFixture<CreateExamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExamPageComponent ]
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
