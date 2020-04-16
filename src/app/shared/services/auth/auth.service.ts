import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(SERVER_URL_TOKEN) private serverUrl: string,
    @Inject(API_BASE_URL_TOKEN) private apiBase: string
  ) {}

  login(username: string, password: string) {
    return this.http.post(`${this.serverUrl}${this.apiBase}/auth/login`, { username, password });
  }

  logout() {
    return this.http.post(`${this.serverUrl}${this.apiBase}/auth/logout`, {});
  }

  isLoggedIn() {
    return this.http
      .get<{
        isLoggedIn: boolean;
      }>(`${this.serverUrl}${this.apiBase}/auth/login`)
      .pipe(map((data) => data.isLoggedIn));
  }
}
