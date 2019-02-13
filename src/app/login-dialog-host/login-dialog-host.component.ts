import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-dialog-host',
  templateUrl: './login-dialog-host.component.html',
  styleUrls: ['./login-dialog-host.component.css']
})

export class LoginDialogHostComponent {

  currentMatDialogRef: MatDialogRef<LoginComponent> = null;

  constructor( public matDialog: MatDialog ) {}

  public openLoginDialog(): void {

    this.currentMatDialogRef = this.matDialog.open(LoginComponent, {
      autoFocus: true,
      disableClose: true,
      hasBackdrop: true
    });
    this.currentMatDialogRef.afterClosed().subscribe(() => {});
  }

}
