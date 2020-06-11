import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { AuthService } from '../../services/auth/auth.service';
import { AppRouteHostComponent } from './app-route-host.component';

describe('AppRouteHostComponent', () => {
  let component: AppRouteHostComponent;
  let fixture: ComponentFixture<AppRouteHostComponent>;

  let authService: AuthService;
  let router: Router;

  let navigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRouteHostComponent],
      imports: [RouterTestingModule, MatToolbarModule, HttpClientTestingModule, MatIconModule],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    fixture = TestBed.createComponent(AppRouteHostComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);

    navigateSpy = spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('logout', () => {
    it('should call logout of AuthService', () => {
      const spy = spyOn(authService, 'logout').and.returnValue(of({}));

      component.logout();

      expect(spy).toHaveBeenCalled();
    });

    it('should navigate to /auth/login', () => {
      spyOn(authService, 'logout').and.returnValue(of({}));

      component.logout();

      expect(navigateSpy).toHaveBeenCalledWith(['auth', 'login']);
    });
  });
});
