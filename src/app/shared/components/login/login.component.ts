import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  failedLogin: boolean;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  login() {
    this.failedLogin = false;

    this.auth.login(this.form.get('username').value, this.form.get('password').value).subscribe(
      () => {
        this.router.navigate(['']);
      },
      () => (this.failedLogin = true)
    );
  }
}
