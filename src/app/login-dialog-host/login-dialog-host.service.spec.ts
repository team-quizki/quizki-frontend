import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginDialogHostService } from './login-dialog-host.service';

describe('LoginDialogHostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ BrowserAnimationsModule ]
  }));

  it('should be created', () => {
    const service: LoginDialogHostService = TestBed.get(LoginDialogHostService);
    expect(service).toBeTruthy();
  });
});
