import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ads-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Page Not Found
  `
})
export class NotFoundPageComponent {
  constructor() {
  }
}
