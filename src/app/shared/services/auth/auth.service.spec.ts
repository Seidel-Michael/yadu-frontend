import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';

const SERVER_URL = 'http://localhost';
const API_BASE_URL = '/yadu/api/v1';

describe('AuthService', () => {
  let service: AuthService;

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: API_BASE_URL },
        { provide: SERVER_URL_TOKEN, useValue: SERVER_URL },
      ],
      imports: [HttpClientTestingModule],
    });

    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    http.verify();
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('login', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/auth/login`;

    it('should call correct API endpoint', (done) => {
      service.login('abc', 'def').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush({});
    });

    it('should use correct HTTP method', (done) => {
      service.login('abc', 'def').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('POST');
      request.flush({});
    });

    it('should use correct body', (done) => {
      service.login('abc', 'def').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.body).toEqual({ username: 'abc', password: 'def' });
      request.flush({});
    });

    it('should return correct response', (done) => {
      service.login('abc', 'def').subscribe((res) => {
        expect(res).toEqual({});
        done();
      });

      const request = http.expectOne(URL);
      request.flush({});
    });

    it('should return correct error response', (done) => {
      service.login('abc', 'def').subscribe(
        () => {
          fail();
        },
        (err) => {
          expect(err).toBeInstanceOf(HttpErrorResponse);
          done();
        }
      );

      const request = http.expectOne(URL);
      request.error(new ErrorEvent('abc'), { status: 500 });
    });
  });

  describe('logout', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/auth/logout`;

    it('should call correct API endpoint', (done) => {
      service.logout().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush({});
    });

    it('should use correct HTTP method', (done) => {
      service.logout().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('POST');
      request.flush({});
    });

    it('should use correct body', (done) => {
      service.logout().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.body).toEqual({});
      request.flush({});
    });

    it('should return correct response', (done) => {
      service.logout().subscribe((res) => {
        expect(res).toEqual({});
        done();
      });

      const request = http.expectOne(URL);
      request.flush({});
    });

    it('should return correct error response', (done) => {
      service.logout().subscribe(
        () => {
          fail();
        },
        (err) => {
          expect(err).toBeInstanceOf(HttpErrorResponse);
          done();
        }
      );

      const request = http.expectOne(URL);
      request.error(new ErrorEvent('abc'), { status: 500 });
    });
  });

  describe('isLoggedIn', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/auth/login`;

    it('should call correct API endpoint', (done) => {
      service.isLoggedIn().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush({ isLoggedIn: true });
    });

    it('should use correct HTTP method', (done) => {
      service.isLoggedIn().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('GET');
      request.flush({ isLoggedIn: true });
    });

    it('should return correct response', (done) => {
      service.isLoggedIn().subscribe((res) => {
        expect(res).toEqual(true);
        done();
      });

      const request = http.expectOne(URL);
      request.flush({ isLoggedIn: true });
    });

    it('should return correct error response', (done) => {
      service.isLoggedIn().subscribe(
        () => {
          fail();
        },
        (err) => {
          expect(err).toBeInstanceOf(HttpErrorResponse);
          done();
        }
      );

      const request = http.expectOne(URL);
      request.error(new ErrorEvent('abc'), { status: 500 });
    });
  });
});
