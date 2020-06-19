import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, UsersService } from '../../services';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-app-route-host',
  templateUrl: './app-route-host.component.html',
  styleUrls: ['./app-route-host.component.scss'],
})
export class AppRouteHostComponent implements OnInit {
  user$: Observable<User>;

  languages = [
    {
      translation: 'common.languages.german',
      language: 'de',
    },
    {
      translation: 'common.languages.english',
      language: 'en',
    },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private translate: TranslateService,
    private users: UsersService
  ) {}

  ngOnInit() {
    this.user$ = this.users.getCurrentUser();
  }

  changeLanguage(language: string) {
    this.translate.use(language).subscribe(() => {});
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['auth', 'login']);
    });
  }
}
