import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteHostComponent } from './shared/components/app-route-host/app-route-host.component';
import { AuthRouteHostComponent } from './shared/components/auth-route-host/auth-route-host.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'app',
    component: AppRouteHostComponent,
    children: [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) }],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: 'auth', component: AuthRouteHostComponent, children: [{ path: 'login', component: LoginComponent }] },
  { path: '', pathMatch: 'full', redirectTo: '/app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
