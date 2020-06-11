import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRouteHostComponent } from './app-route-host.component';

describe('AppRouteHostComponent', () => {
  let component: AppRouteHostComponent;
  let fixture: ComponentFixture<AppRouteHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRouteHostComponent],
      imports: [RouterTestingModule, MatToolbarModule],
    });

    fixture = TestBed.createComponent(AppRouteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
