import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { API_BASE_URL_TOKEN } from 'src/app/shared/injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from 'src/app/shared/injection-tokens/server-url.injection-token';
import { UsersService } from 'src/app/shared/services';
import { UserManagementComponent } from './user-management.component';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  let usersService: UsersService;

  let getUsersSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      imports: [HttpClientTestingModule, MatTableModule, MatChipsModule],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;

    usersService = TestBed.inject(UsersService);

    getUsersSpy = spyOn(usersService, 'getUsers').and.returnValue(of([]));

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get users', () => {
      expect(getUsersSpy).toHaveBeenCalled();
    });
  });
});
