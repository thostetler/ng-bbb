import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
    console.log('token interceptor instantiated');
  }

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const { bootstrap } = environment.targets;
    if (request.url.indexOf(bootstrap) > -1) {
      return next.handle(request);
    }

    return this.auth.getToken().pipe(mergeMap(token => {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });

      return next.handle(req);
    }));
  }
}
