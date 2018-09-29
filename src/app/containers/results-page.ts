import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ads-results-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Results Page
  `
})
export class ResultsPageComponent {
  constructor() {
  }
}
