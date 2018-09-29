import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const COMPONENTS = [
  NavbarComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {}
