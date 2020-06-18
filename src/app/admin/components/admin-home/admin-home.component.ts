import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  routerLinks: Array<{ link: string; translation: string }> = [
    { link: '/app/admin/settings', translation: 'admin.general' },
    { link: '/app/admin/settings/user-management', translation: 'admin.userManagement' },
  ];
}
