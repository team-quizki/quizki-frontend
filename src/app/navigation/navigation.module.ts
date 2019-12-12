import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from '../navigation.service';
import { LoginDialogService } from './../login/login-dialog.service';

import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    NavigationService, LoginDialogService
  ]
})

export class NavigationModule { }
