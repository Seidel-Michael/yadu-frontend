import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRouteHostComponent } from './app-route-host.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AppRouteHostComponent', () => {
  let component: AppRouteHostComponent;
  let fixture: ComponentFixture<AppRouteHostComponent>;

  let authService: AuthService;

  let routerStub: any;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      declarations: [AppRouteHostComponent],
      imports: [RouterTestingModule, MatToolbarModule],
      providers: [
        {
          provide: Router,
          useValue: routerStub,
        },
      ],
    });

    fixture = TestBed.createComponent(AppRouteHostComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);

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

      expect(routerStub.navigate).toHaveBeenCalledWith(['auth', 'login']);
    });
  });
});
