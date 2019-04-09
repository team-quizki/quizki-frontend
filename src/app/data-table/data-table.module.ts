import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';

import {MatButtonModule} from '@angular/material/button';

import { DataTableComponent } from './data-table.component';
import { DataService } from './data.service';

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
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DataTableComponent
  ],
  providers: [
    DataService
  ]
})

export class DataTableModule { }
