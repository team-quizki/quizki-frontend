import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { CommonFieldControlsService } from './common-field-controls.service';

describe('CommonFieldControlsService', () => {

  let service: CommonFieldControlsService;

//  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => { service = new CommonFieldControlsService(); });

  it('#hidePasswordInField should return boolean true', () => {
    expect(service.hidePasswordInField()).toBe(true);
  });

  it('#showPasswordInField should return boolean false', () => {
    expect(service.showPasswordInField()).toBe(false);
  });

  it('#getPasswordFieldType should change after hidePasswordClick(Event)', () => {
    const comp = new CommonFieldControlsService();
    expect(comp.getPasswordFieldType()).toBe("password", 'is hidden at first');
    comp.hidePasswordClick(Event);
    expect(comp.getPasswordFieldType()).toBe("text", 'is displayed after click');
    comp.hidePasswordClick(Event);
    expect(comp.getPasswordFieldType()).toBe("password", 'is hidden after second click');
  });

  it('#isPasswordField should return boolean true', () => {
    expect(service.isPasswordField()).toBe(true);
  });

  it('#hidePasswordClick(Event) should toggle #hidePassword', () => {
    const comp = new CommonFieldControlsService();
    expect(comp.hidePassword).toBe(true, 'password hidden at first');
    comp.hidePasswordClick(Event);
    expect(comp.hidePassword).toBe(false, 'password shown after click');
    comp.hidePasswordClick(Event);
    expect(comp.hidePassword).toBe(true, 'password hidden after second click');
  });

  it('#getIconVisiblityString should change after hidePasswordClick(Event)', () => {
    const comp = new CommonFieldControlsService();
    expect(comp.getIconVisiblityString()).toBe("visibility_off", 'password not visible at first');
    comp.hidePasswordClick(Event);
    expect(comp.getIconVisiblityString()).toBe("visibility", 'password displayed after click');
    comp.hidePasswordClick(Event);
    expect(comp.getIconVisiblityString()).toBe("visibility_off", 'password hidden after second click');
  });

  it('should be created', () => {
    const service: CommonFieldControlsService = TestBed.get(CommonFieldControlsService);
    expect(service).toBeTruthy();
  });
});
