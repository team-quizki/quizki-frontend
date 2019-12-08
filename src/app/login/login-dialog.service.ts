import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {

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
