import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { API_BASE_URL_TOKEN } from 'src/app/shared/injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from 'src/app/shared/injection-tokens/server-url.injection-token';
import { UserDetailDialogComponent } from './user-detail-dialog.component';

describe('UserDetailDialogComponent', () => {
  let component: UserDetailDialogComponent;
  let fixture: ComponentFixture<UserDetailDialogComponent>;
  let router: any;

  beforeEach(() => {
    router = {
      navigate: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      declarations: [UserDetailDialogComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatIconModule,
        MatInputModule,
        MatChipsModule,
        NoopAnimationsModule,
        MatDialogModule,
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            mode: 'add',
            user: { username: 'someUser', userId: 'myId', groups: ['admin'] },
          },
        },
        {
          provide: Router,
          useValue: router,
        },
        { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
        { provide: SERVER_URL_TOKEN, useValue: 'http://localhost' },
      ],
    });

    fixture = TestBed.createComponent(UserDetailDialogComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('form', () => {
    it('should disable username control when mode is edit', () => {
      component.data.mode = 'edit';

      component.ngOnInit();

      expect(component.form.get('username').disabled).toBeTrue();
      expect(component.form.get('username').enabled).toBeFalse();
    });

    it('should enable username control when mode is add', () => {
      expect(component.form.get('username').enabled).toBeTrue();
      expect(component.form.get('username').disabled).toBeFalse();
    });

    it('should set form valid when username is set and password and confirmPassword are empty', () => {
      component.form.get('password').setValue('');
      component.form.get('confirmPassword').setValue('');

      expect(component.form.valid).toBeTrue();
      expect(component.form.invalid).toBeFalse();
      expect(component.form.hasError('passwordMatch')).toBeFalse();
    });

    it('should set form valid when username is set and password and confirmPassword are null', () => {
      component.form.get('password').setValue(null);
      component.form.get('confirmPassword').setValue(null);

      expect(component.form.valid).toBeTrue();
      expect(component.form.invalid).toBeFalse();
      expect(component.form.hasError('passwordMatch')).toBeFalse();
    });

    it('should set form valid when username is set and password and confirmPassword are null', () => {
      component.form.get('password').setValue(undefined);
      component.form.get('confirmPassword').setValue(undefined);

      expect(component.form.valid).toBeTrue();
      expect(component.form.invalid).toBeFalse();
      expect(component.form.hasError('passwordMatch')).toBeFalse();
    });

    it('should set form invalid when password is set and confirmPassword does not match', () => {
      component.form.get('password').setValue('abc');
      component.form.get('confirmPassword').setValue('null');

      expect(component.form.invalid).toBeTrue();
      expect(component.form.valid).toBeFalse();
      expect(component.form.hasError('passwordMatch')).toBeTrue();
    });

    it('should set form valid when password and confirmPassword are set and match', () => {
      component.form.get('password').setValue('abc');
      component.form.get('confirmPassword').setValue('abc');

      expect(component.form.valid).toBeTrue();
      expect(component.form.invalid).toBeFalse();
      expect(component.form.hasError('passwordMatch')).toBeFalse();
    });
  });

  describe('addGroup', () => {
    it('should add group', () => {
      component.data.user = { username: '', userId: '', groups: ['def'] };

      const event = { value: 'abc', input: { value: 'abc' } };
      component.addGroup(event as any);

      expect(component.data.user.groups).toEqual(['def', 'abc']);
    });

    it('should add group without spaces', () => {
      component.data.user = { username: '', userId: '', groups: ['def'] };

      const event = { value: '   abc   ', input: { value: 'abc' } };
      component.addGroup(event as any);

      expect(component.data.user.groups).toEqual(['def', 'abc']);
    });

    it('should reset input', () => {
      component.data.user = { username: '', userId: '', groups: ['def'] };

      const event = { value: '   abc   ', input: { value: 'abc' } };
      component.addGroup(event as any);

      expect(event.input.value).toBe('');
    });

    it('should mark form as dirty', () => {
      component.form.markAsPristine();

      const event = { value: '   abc   ', input: { value: 'abc' } };
      component.addGroup(event as any);

      expect(component.form.dirty).toBeTrue();
    });

    it('should not do anything when value is empty', () => {
      component.data.user = { username: '', userId: '', groups: ['def'] };
      component.form.markAsPristine();

      const event = { input: { value: 'abc' } };
      component.addGroup(event as any);

      expect(component.form.dirty).toBeFalse();
      expect(component.form.pristine).toBeTrue();
      expect(component.data.user.groups).toEqual(['def']);
    });
  });

  describe('removeGroup', () => {
    it('should remove group', () => {
      component.data.user.groups = ['admin', 'user'];

      component.removeGroup('user');

      expect(component.data.user.groups).toEqual(['admin']);
    });

    it('should not remove anything when group not in array', () => {
      component.data.user.groups = ['admin', 'user'];

      component.removeGroup('lol');

      expect(component.data.user.groups).toEqual(['admin', 'user']);
    });

    it('should mark form as dirty', () => {
      component.form.markAsPristine();

      component.removeGroup('lol');

      expect(component.form.dirty).toBeTrue();
    });
  });

  describe('save', () => {
    it('should call updateUser of UsersService', () => {
      component.form.get('username').setValue('user');
      component.form.get('password').setValue('pass');
      component.form.get('confirmPassword').setValue('pass');
      component.data.user.groups = ['admin', 'user'];

      expect(component.save()).toEqual({
        userId: 'myId',
        username: 'user',
        password: 'pass',
        groups: ['admin', 'user'],
      });
    });

    it('should save without password when password is an empty string', () => {
      component.form.get('username').setValue('user');
      component.form.get('password').setValue('');
      component.form.get('confirmPassword').setValue('');
      component.data.user.groups = ['admin', 'user'];

      expect(component.save()).toEqual({
        userId: 'myId',
        username: 'user',
        groups: ['admin', 'user'],
        password: undefined,
      });
    });
  });
});
