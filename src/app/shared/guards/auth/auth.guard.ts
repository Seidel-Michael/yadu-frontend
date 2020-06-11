import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.auth
      .isLoggedIn()
      .pipe(catchError(() => of(false)))
      .pipe(
        map((isLoggedIn) => {
          if (isLoggedIn) {
            return true;
          } else {
            return this.router.parseUrl('/auth/login');
          }
        })
      );
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.canActivate();
  }

  canLoad(): Observable<boolean> {
    return this.auth
      .isLoggedIn()
      .pipe(catchError(() => of(false)))
      .pipe(
        map((isLoggedIn) => {
          return isLoggedIn;
        })
      );
  }
}
