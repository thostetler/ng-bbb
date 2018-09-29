import { Routes } from '@angular/router';

import { LandingPageComponent } from './containers/landing-page';
import { ResultsPageComponent } from './containers/results-page';
import { DetailsPageComponent } from './containers/details-page';
import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search', component: ResultsPageComponent },
  { path: 'abstract/:bibcodeslug', component: DetailsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
