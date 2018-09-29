import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ads-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div fxLayout="column" fxLayoutAlign="space-between" fxFill>
    <div fxFlex="64px">
      <app-navbar></app-navbar>
    </div>
    <div fxFlex>
      <router-outlet></router-outlet>
    </div>
    <div fxFlex="64px">
      <app-footer></app-footer>
    </div>
  </div>
  `
})
export class AppComponent {
  constructor() {
  }
}
