import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { GeneralComponent } from './components/general/general.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'settings',
        component: AdminHomeComponent,
        children: [
          { path: '', component: GeneralComponent },
          {
            path: 'user-management',
            component: UserManagementComponent,
          },
        ],
      },
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: '**', redirectTo: 'settings' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
