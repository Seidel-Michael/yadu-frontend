import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouteHostComponent } from './app-route-host.component';

describe('AppRouteHostComponent', () => {
  let component: AppRouteHostComponent;
  let fixture: ComponentFixture<AppRouteHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRouteHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRouteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
