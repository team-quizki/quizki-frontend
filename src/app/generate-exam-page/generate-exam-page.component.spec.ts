import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateExamPageComponent } from './generate-exam-page.component';

describe('GenerateExamPageComponent', () => {
  let component: GenerateExamPageComponent;
  let fixture: ComponentFixture<GenerateExamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateExamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
