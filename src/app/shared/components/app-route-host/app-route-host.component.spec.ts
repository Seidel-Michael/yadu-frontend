import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { API_BASE_URL_TOKEN } from '../../injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from '../../injection-tokens/server-url.injection-token';
import { AuthService } from '../../services/auth/auth.service';
import { AppRouteHostComponent } from './app-route-host.component';

describe('AppRouteHostComponent', () => {
  let component: AppRouteHostComponent;
  let fixture: ComponentFixture<AppRouteHostComponent>;

  let authService: AuthService;

  let translateService: TranslateService;
  let router: Router;

  let navigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRouteHostComponent],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        HttpClientTestingModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatMenuModule,
      ],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    fixture = TestBed.createComponent(AppRouteHostComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    translateService = TestBed.inject(TranslateService);
    authService = TestBed.inject(AuthService);

    navigateSpy = spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('changeLanguage', () => {
    it('should call use of TranslateService', () => {
      const spy = spyOn(translateService, 'use').and.returnValue(of({}));

      component.changeLanguage('es');

      expect(spy).toHaveBeenCalledWith('es');
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
