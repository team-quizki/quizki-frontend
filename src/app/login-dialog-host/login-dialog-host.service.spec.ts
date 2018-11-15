import { TestBed } from '@angular/core/testing';

import { LoginDialogHostService } from './login-dialog-host.service';

describe('LoginDialogHostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginDialogHostService = TestBed.get(LoginDialogHostService);
    expect(service).toBeTruthy();
  });
});
