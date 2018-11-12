import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFieldControlsService {

hidePassword:boolean;

  constructor() {
    this.hidePassword = true;
  }

  public hidePasswordInField(){
    return this.hidePassword = true;
  }

  public showPasswordInField(){
    return this.hidePassword = false;
  }

  public getPasswordFieldType(): string {
    return this.hidePassword ? 'password' : 'text';
  }

  public isPasswordField(): boolean {
    return this.hidePassword === true;
  }

  public hidePasswordClick($event): boolean {
    if(this.isPasswordField())
      return this.showPasswordInField();
    else
      return this.hidePasswordInField();
  }

  public getIconVisiblityString(): string {
    return this.isPasswordField() ? 'visibility_off' : 'visibility';
  }

}
