import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouteHostComponent } from './shared/components/auth-route-host/auth-route-host.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  { path: 'auth', component: AuthRouteHostComponent, children: [{ path: 'login', component: LoginComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
