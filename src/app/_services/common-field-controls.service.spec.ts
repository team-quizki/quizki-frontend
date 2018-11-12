import { TestBed } from '@angular/core/testing';

import { CommonFieldControlsService } from './common-field-controls.service';

describe('CommonFieldControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFieldControlsService = TestBed.get(CommonFieldControlsService);
    expect(service).toBeTruthy();
  });
});
