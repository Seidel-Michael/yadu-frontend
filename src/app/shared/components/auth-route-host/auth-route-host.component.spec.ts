import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthRouteHostComponent } from './auth-route-host.component';

describe('AuthRouteHostComponent', () => {
  let component: AuthRouteHostComponent;
  let fixture: ComponentFixture<AuthRouteHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRouteHostComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(AuthRouteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
