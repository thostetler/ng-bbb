import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
