import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  ],

  providers: [provideNativeDateAdapter()],

  exports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule
  ],
})

export class AngularMaterialModule {}