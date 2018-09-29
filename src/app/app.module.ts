import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './containers/app';
import { routes } from './routes';
import { ComponentsModule } from './components';
import { LandingPageComponent } from './containers/landing-page';
import { ResultsPageComponent } from './containers/results-page';
import { DetailsPageComponent } from './containers/details-page';
import { NotFoundPageComponent } from './containers/not-found-page';

import { AdsApiService } from './services/ads-api.service';
import { AuthService } from './services/auth/auth.service';
import { TokenInterceptor } from './services/auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResultsPageComponent,
    DetailsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AdsApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
