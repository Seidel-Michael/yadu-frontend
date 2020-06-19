import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';

export interface UserDetailDialogData {
  mode: 'add' | 'edit';
  user: User;
}

/* istanbul ignore next */
class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.scss'],
})
export class UserDetailDialogComponent implements OnInit {
  matcher = new CustomErrorStateMatcher();
  separatorKeysCodes: number[] = [ENTER, COMMA];

  form: FormGroup;
  groupsInput: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserDetailDialogData, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username: [{ value: this.data.user.username, disabled: this.data.mode === 'add' ? false : true }],
        password: [''],
        confirmPassword: [''],
      },
      { validators: [this.passwordValidator] }
    );
  }

  addGroup(event: MatChipInputEvent) {
    if ((event.value || '').trim()) {
      this.data.user.groups.push(event.value.trim());

      event.input.value = '';
      this.form.markAsDirty();
    }
  }

  removeGroup(group: string) {
    const index = this.data.user.groups.indexOf(group);

    if (index >= 0) {
      this.data.user.groups.splice(index, 1);
    }

    this.form.markAsDirty();
  }

  save() {
    const password = this.form.get('password').value === '' ? undefined : this.form.get('password').value;

    return {
      username: this.form.get('username').value,
      groups: this.data.user.groups,
      userId: this.data.user.userId,
      password,
    };
  }

  private passwordValidator(form: FormGroup): null | ValidationErrors {
    const matchErrors = { passwordMatch: 'passwordMatch' };

    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    const passwordEmpty = password === '' || password === null || password === undefined;
    const confirmPasswordEmpty = confirmPassword === '' || confirmPassword === null || confirmPassword === undefined;

    if (!passwordEmpty && !confirmPasswordEmpty) {
      return password === confirmPassword ? null : matchErrors;
    } else if ((!passwordEmpty && confirmPasswordEmpty) || (passwordEmpty && !confirmPasswordEmpty)) {
      return matchErrors;
    } else {
      return null;
    }
  }
}
