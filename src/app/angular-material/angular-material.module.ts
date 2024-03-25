import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  imports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],

  providers: [provideNativeDateAdapter()],

  exports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
})

export class AngularMaterialModule {}