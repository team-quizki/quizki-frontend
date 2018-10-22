import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule } from '@angular/material'

import { DataTableComponent } from './data-table.component'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [ 
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    MatTableModule
  ],
  exports: [
    DataTableComponent
  ],
  providers: [
    DataService
  ]
})

export class DataTableModule { }
