import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { LoginDialogHostService } from './login-dialog-host.service';

@Component({
  selector: 'app-login-dialog-host',
  templateUrl: './login-dialog-host.component.html',
  styleUrls: ['./login-dialog-host.component.css']
})

export class LoginDialogHostComponent {

  currentDialog: MatDialogRef<LoginComponent> = null;
  destroy = new Subject<any>();


  constructor(loginDHS: LoginDialogHostService, matDialog: MatDialog, route: ActivatedRoute, router: Router) {

    route.params.pipe(takeUntil(this.destroy))
    .subscribe(params => {
      if(this.currentDialog) {
        this.currentDialog.close();
      }

      this.currentDialog = matDialog.open(LoginComponent, {
        autoFocus: true,
        disableClose: true,
        hasBackdrop: true,
        data: { id: params.id }
      });
      this.currentDialog.afterClosed().subscribe((result) => {
          console.log(" After Close of Dialog: " + JSON.stringify(result));
          //need a conditional route here incase a known route exists
          router.navigateByUrl(loginDHS.routeToUrl());
      })
    })

   }

  ngOnDestroy() {
    this.destroy.next();
  }

}
