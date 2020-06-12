import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { AuthService } from '../../services/auth/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authService: AuthService;

  const router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatInputModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('login', () => {
    it('should call login of AuthService', () => {
      const spy = spyOn(authService, 'login').and.returnValue(of(undefined));

      component.form.get('username').setValue('abc');
      component.form.get('password').setValue('def');

      component.login();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('abc', 'def');
    });

    it('should navigate to /', () => {
      spyOn(authService, 'login').and.returnValue(of(undefined));

      component.login();

      expect(router.navigate).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['']);
    });

    it('should set failedLogin to false when login is successful', () => {
      spyOn(authService, 'login').and.returnValue(of(undefined));

      component.form.get('username').setValue('abc');
      component.form.get('password').setValue('def');

      component.login();

      expect(component.failedLogin).toBeFalse();
    });

    it('should set failedLogin to true when login failed', () => {
      spyOn(authService, 'login').and.returnValue(throwError(undefined));

      component.form.get('username').setValue('abc');
      component.form.get('password').setValue('def');

      component.login();

      expect(component.failedLogin).toBeTrue();
    });
  });
});
