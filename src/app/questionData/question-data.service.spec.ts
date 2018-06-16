import { TestBed, inject } from '@angular/core/testing';

import { QuestionDataService } from './question-data.service';

describe('QuestionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionDataService]
    });
  });

  it('should be created', inject([QuestionDataService], (service: QuestionDataService) => {
    expect(service).toBeTruthy();
  }));
});
