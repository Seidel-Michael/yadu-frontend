import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { API_BASE_URL_TOKEN } from 'src/app/shared/injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from 'src/app/shared/injection-tokens/server-url.injection-token';
import { UsersService } from 'src/app/shared/services';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';
import { UserManagementComponent } from './user-management.component';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  let usersService: UsersService;
  let matDialog: MatDialog;

  let getUsersSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;

    usersService = TestBed.inject(UsersService);
    matDialog = TestBed.inject(MatDialog);

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

  describe('addUser', () => {
    it('should call open of MatDialog', () => {
      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of()),
      };
      const spy = spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      component.addUser();

      expect(spy).toHaveBeenCalledWith(UserDetailDialogComponent, {
        data: {
          mode: 'add',
          user: {
            username: '',
            groups: [],
          },
        },
        width: '30%',
      });
    });

    it('should call addUser when afterClosed returns value', () => {
      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of({ username: 'abc', password: 'pass', groups: ['abc'] })),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      const spy = spyOn(usersService, 'addUser').and.returnValue(of({}));

      component.addUser();

      expect(spy).toHaveBeenCalledWith('abc', 'pass', ['abc']);
    });

    it('should not call addUser when afterClosed returns undefined', () => {
      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of(undefined)),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      const spy = spyOn(usersService, 'addUser').and.returnValue(of({}));

      component.addUser();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should call getUsers when addUser was successful', () => {
      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of({ username: 'abc', userId: 'someID', groups: ['abc'] })),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      spyOn(usersService, 'addUser').and.returnValue(of({}));

      component.addUser();

      expect(getUsersSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('editUser', () => {
    it('should call getUser of UsersService', () => {
      const spy = spyOn(usersService, 'getUser').and.returnValue(of({ username: 'abc', userId: 'someID', groups: [] }));

      component.editUser('someID');

      expect(spy).toHaveBeenCalledWith('someID');
    });

    it('should call open of MatDialog', () => {
      spyOn(usersService, 'getUser').and.returnValue(of({ username: 'abc', userId: 'someID', groups: [] }));

      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of()),
      };
      const spy = spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      component.editUser('someID');

      expect(spy).toHaveBeenCalledWith(UserDetailDialogComponent, {
        data: {
          mode: 'edit',
          user: { username: 'abc', userId: 'someID', groups: [] },
        },
        width: '30%',
      });
    });

    it('should call updateUser when afterClosed returns value', () => {
      spyOn(usersService, 'getUser').and.returnValue(of({ username: 'abc', userId: 'someID', groups: [] }));

      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of({ username: 'abc', userId: 'someID', groups: ['abc'] })),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      const spy = spyOn(usersService, 'updateUser').and.returnValue(of({}));

      component.editUser('someID');

      expect(spy).toHaveBeenCalledWith({ username: 'abc', userId: 'someID', groups: ['abc'] });
    });

    it('should not call updateUser when afterClosed returns undefined', () => {
      spyOn(usersService, 'getUser').and.returnValue(of({ username: 'abc', userId: 'someID', groups: [] }));

      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of(undefined)),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      const spy = spyOn(usersService, 'updateUser').and.returnValue(of({}));

      component.editUser('someID');

      expect(spy).not.toHaveBeenCalled();
    });

    it('should call getUsers when updateUser was successful', () => {
      spyOn(usersService, 'getUser').and.returnValue(of({ username: 'abc', userId: 'someID', groups: [] }));

      const dialogRef = {
        afterClosed: jasmine.createSpy().and.returnValue(of({ username: 'abc', userId: 'someID', groups: ['abc'] })),
      };
      spyOn(matDialog, 'open').and.returnValue(dialogRef as any);

      spyOn(usersService, 'updateUser').and.returnValue(of({}));

      component.editUser('someID');

      expect(getUsersSpy).toHaveBeenCalledTimes(2);
    });
  });
});
