import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from '../navigation.service';
import { LoginDialogHostComponent } from './../login-dialog-host/login-dialog-host.component';

import { RouterModule } from '@angular/router';

import {
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatToolbarModule
        } from '@angular/material';

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
    NavigationService
  ]
})

export class NavigationModule { }
