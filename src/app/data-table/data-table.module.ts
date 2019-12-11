import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

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
