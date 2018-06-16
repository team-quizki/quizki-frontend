import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDifficultyComponent } from './question-difficulty.component';

describe('QuestionDifficultyComponent', () => {
  let component: QuestionDifficultyComponent;
  let fixture: ComponentFixture<QuestionDifficultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDifficultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
