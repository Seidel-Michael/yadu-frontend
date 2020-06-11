import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  routerLinks: Array<{ link: string; translation: string }> = [
    { link: '/app/admin', translation: 'general' },
    { link: '/app/admin/user-management', translation: 'userManagement' },
  ];
}
