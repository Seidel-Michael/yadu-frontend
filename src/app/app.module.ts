import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/components/app/app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthRouteHostComponent } from './shared/components/auth-route-host/auth-route-host.component';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, AuthRouteHostComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
