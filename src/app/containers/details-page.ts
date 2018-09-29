import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AdsApiService } from '../services/ads-api.service';

@Component({
  selector: 'ads-details-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Details Page
  `
})
export class DetailsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: AdsApiService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bibcode = params.get('bibcodeslug');
      this.api.search({ q: 'dark' }).subscribe();
    });
  }
}
