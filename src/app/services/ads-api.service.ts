import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Query } from '../models/query';
import { Article } from '../models/article';

import { environment } from '../../environments/environment';

@Injectable()
export class AdsApiService {

  constructor(private http: HttpClient) { }

  search(query: Query): Observable<Article[]> {
    console.log('sending query', query, `${this.getApiUrl()}/search/query`);
    return this.http.get(
      `${this.getApiUrl()}/${this.getTarget('search')}?q=${query.q}`
    ).pipe(
      map(res => {
        console.log('got response', res);
        return [{ id: '1' }, { id: '2' }];
      }),
      catchError(err => throwError(err))
    );
  }

  private getApiUrl(): string {
    return environment.apiUrl;
  }

  private getTarget(val: string): string {
    return environment.targets[val];
  }
}
