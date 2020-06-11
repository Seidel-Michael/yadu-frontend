import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-route-host',
  templateUrl: './app-route-host.component.html',
  styleUrls: ['./app-route-host.component.scss'],
})
export class AppRouteHostComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['auth', 'login']);
    });
  }
}
