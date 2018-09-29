import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ads-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Landing Page
  `
})
export class LandingPageComponent {
  constructor() {
  }
}
