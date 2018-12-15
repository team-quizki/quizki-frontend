import { TestBed } from '@angular/core/testing';

import { CommonFieldControlsService } from './common-field-controls.service';

describe('CommonFieldControlsService', () => {

  let service: CommonFieldControlsService;

  beforeEach(() => { service = new CommonFieldControlsService(); });

  it('#hidePasswordInField should return boolean true', () => {
    expect(service.hidePasswordInField()).toBe(true);
  });

  it('#showPasswordInField should return boolean false', () => {
    expect(service.showPasswordInField()).toBe(false);
  });

  it('#getPasswordFieldType should change after hidePasswordClick(Event)', () => {
    expect(service.getPasswordFieldType()).toBe('password', 'is hidden at first');
    service.hidePasswordClick(Event);
    expect(service.getPasswordFieldType()).toBe('text', 'is displayed after click');
    service.hidePasswordClick(Event);
    expect(service.getPasswordFieldType()).toBe('password', 'is hidden after second click');
  });

  it('#isPasswordField should return boolean true', () => {
    expect(service.isPasswordField()).toBe(true);
  });

  it('#hidePasswordClick(Event) should toggle #hidePassword', () => {
    expect(service.hidePassword).toBe(true, 'password hidden at first');
    service.hidePasswordClick(Event);
    expect(service.hidePassword).toBe(false, 'password shown after click');
    service.hidePasswordClick(Event);
    expect(service.hidePassword).toBe(true, 'password hidden after second click');
  });

  it('#getIconVisiblityString should change after hidePasswordClick(Event)', () => {
    expect(service.getIconVisiblityString()).toBe('visibility_off', 'password not visible at first');
    service.hidePasswordClick(Event);
    expect(service.getIconVisiblityString()).toBe('visibility', 'password displayed after click');
    service.hidePasswordClick(Event);
    expect(service.getIconVisiblityString()).toBe('visibility_off', 'password hidden after second click');
  });

  it('should be created', () => {
//    const service: CommonFieldControlsService = TestBed.get(CommonFieldControlsService);
    expect(service).toBeTruthy();
  });
});
