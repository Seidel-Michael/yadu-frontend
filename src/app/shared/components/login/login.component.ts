import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  failedLogin: boolean;

  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.failedLogin = false;

    this.auth.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['']);
      },
      () => (this.failedLogin = true)
    );
  }
}
