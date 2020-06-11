import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SERVER_URL_TOKEN } from 'src/app/shared/injection-tokens/server-url.injection-token';
import { API_BASE_URL_TOKEN } from 'src/app/shared/injection-tokens/api-base-url.injection-token';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

const SERVER_URL = 'http://localhost';
const API_BASE_URL = '/yadu/api/v1';

describe('UsersService', () => {
  let service: UsersService;

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
    service = TestBed.inject(UsersService);
  });

  afterEach(() => {
    http.verify();
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('addUser', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users`;
    const response = {};

    it('should call correct API endpoint', (done) => {
      service.addUser('user', 'pass', ['admin']).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.addUser('user', 'pass', ['admin']).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('POST');
      request.flush(response);
    });

    it('should use corret body', (done) => {
      service.addUser('user', 'pass', ['admin']).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.body).toEqual({
        username: 'user',
        password: 'pass',
        groups: ['admin'],
      });
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.addUser('user', 'pass', ['admin']).subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.addUser('user', 'pass', ['admin']).subscribe(
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

  describe('getUsers', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users`;
    const response = [{ username: 'user', userId: 'id', groups: ['admin'] }];

    it('should call correct API endpoint', (done) => {
      service.getUsers().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.getUsers().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('GET');
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.getUsers().subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.getUsers().subscribe(
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

  describe('getCurrentUser', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users/me`;
    const response = {
      username: 'user',
      userId: 'id',
      groups: ['admin'],
    };

    it('should call correct API endpoint', (done) => {
      service.getCurrentUser().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.getCurrentUser().subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('GET');
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.getCurrentUser().subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.getCurrentUser().subscribe(
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

  describe('getUser', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users/someId`;
    const response = {
      username: 'user',
      userId: 'someId',
      groups: ['admin'],
    };

    it('should call correct API endpoint', (done) => {
      service.getUser('someId').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.getUser('someId').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('GET');
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.getUser('someId').subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.getUser('someId').subscribe(
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

  describe('deleteUser', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users/someId`;
    const response = {};

    it('should call correct API endpoint', (done) => {
      service.deleteUser('someId').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.deleteUser('someId').subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('DELETE');
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.deleteUser('someId').subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.deleteUser('someId').subscribe(
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

  describe('updateUser', () => {
    const URL = `${SERVER_URL}${API_BASE_URL}/users/someId`;
    const user: User = {
      username: 'user',
      password: 'pass',
      groups: ['admin'],
      userId: 'someId',
    };
    const response = {};

    it('should call correct API endpoint', (done) => {
      service.updateUser(user).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should use correct http method', (done) => {
      service.updateUser(user).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.method).toBe('PUT');
      request.flush(response);
    });

    it('should use corret body', (done) => {
      service.updateUser(user).subscribe(() => {
        expect().nothing();
        done();
      });

      const request = http.expectOne(URL);
      expect(request.request.body).toEqual(user);
      request.flush(response);
    });

    it('should return correct response', (done) => {
      service.updateUser(user).subscribe((res) => {
        expect(res).toEqual(response);
        done();
      });

      const request = http.expectOne(URL);
      request.flush(response);
    });

    it('should return correct error response', (done) => {
      service.updateUser(user).subscribe(
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
