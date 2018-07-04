import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReferenceComponent } from './question-reference.component';

describe('QuestionReferenceComponent', () => {
  let component: QuestionReferenceComponent;
  let fixture: ComponentFixture<QuestionReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
