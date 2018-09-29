import { of, Observable, timer } from 'rxjs';
import { delay, map, debounce } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../../models/auth';

@Injectable()
export class AuthService {
  currentToken: string;
  initial: boolean = false;

  constructor(private http: HttpClient) {}

  getToken(): Observable<String> {
    return this.currentToken ? of(this.currentToken) : this.setOrRefreshToken();
  }

  private bootstrap(): Observable<Auth> {
    const { apiUrl } = environment;
    const { bootstrap } = environment.targets;
    return this.http.get(`${apiUrl}/${bootstrap}`).pipe(
      map((res: Auth) => res)
    );
  }

  private persistAuthData(data: Auth) {
    localStorage.setItem('auth', JSON.stringify(data));
  }

  private getAuthData(): Auth {
    try {
      return JSON.parse(localStorage.getItem('auth'));
    } catch (e) {
      return null;
    }
  }

  private setOrRefreshToken(): Observable<String> {

    return Observable.create(observer => {
      const authData = this.getAuthData();
      if (authData) {
        this.currentToken = authData.access_token;
        observer.next(this.currentToken);
      } else {
        return this.bootstrap().subscribe((data) => {
          this.currentToken = data.access_token;
          this.persistAuthData(data);
          observer.next(this.currentToken);
        });
      }
    });
  }
}
