import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { AuthService } from '../../services/auth/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  describe('general', () => {
    it('should be created', () => {
      expect(guard).toBeTruthy();
    });
  });

  describe('canActivate', () => {
    it('should return UrlTree with /auth/login when isLoggedIn throws an error', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(throwError(new Error('abc')));

      guard.canActivate().subscribe((response) => {
        expect(response.toString()).toEqual('/auth/login');
        done();
      });
    });

    it('should return UrlTree with /auth/login when isLoggedIn returns false', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(false));

      guard.canActivate().subscribe((response) => {
        expect(response.toString()).toEqual('/auth/login');
        done();
      });
    });

    it('should return true when isLoggedIn returns true', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(true));

      guard.canActivate().subscribe((response) => {
        expect(response).toBeTrue();
        done();
      });
    });
  });

  describe('canActivateChild', () => {
    it('should return UrlTree with /auth/login when isLoggedIn throws an error', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(throwError(new Error('abc')));

      guard.canActivateChild().subscribe((response) => {
        expect(response.toString()).toEqual('/auth/login');
        done();
      });
    });

    it('should return UrlTree with /auth/login when isLoggedIn returns false', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(false));

      guard.canActivateChild().subscribe((response) => {
        expect(response.toString()).toEqual('/auth/login');
        done();
      });
    });

    it('should return true when isLoggedIn returns true', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(true));

      guard.canActivateChild().subscribe((response) => {
        expect(response).toBeTrue();
        done();
      });
    });
  });

  describe('canLoad', () => {
    it('should return false when isLoggedIn throws an error', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(throwError(new Error('abc')));

      guard.canLoad().subscribe((response) => {
        expect(response).toBeFalse();
        done();
      });
    });

    it('should return false when isLoggedIn returns false', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(false));

      guard.canLoad().subscribe((response) => {
        expect(response).toBeFalse();
        done();
      });
    });

    it('should return true when isLoggedIn returns true', (done) => {
      spyOn(authService, 'isLoggedIn').and.returnValue(of(true));

      guard.canLoad().subscribe((response) => {
        expect(response).toBeTrue();
        done();
      });
    });
  });
});
