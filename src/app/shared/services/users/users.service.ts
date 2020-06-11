import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_BASE_URL_TOKEN } from 'src/app/shared/injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from 'src/app/shared/injection-tokens/server-url.injection-token';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(SERVER_URL_TOKEN) private serverUrl: string,
    @Inject(API_BASE_URL_TOKEN) private apiBase: string
  ) {}

  addUser(username: string, password: string, groups: string[]): Observable<{}> {
    return this.http.post(`${this.serverUrl}${this.apiBase}/users`, { username, password, groups });
  }

  deleteUser(id: string): Observable<{}> {
    return this.http.delete(`${this.serverUrl}${this.apiBase}/users/${id}`);
  }

  updateUser(user: User): Observable<{}> {
    return this.http.put(`${this.serverUrl}${this.apiBase}/users/${user.userId}`, user);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.serverUrl}${this.apiBase}/users/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverUrl}${this.apiBase}/users`);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.serverUrl}${this.apiBase}/users/me`);
  }
}
