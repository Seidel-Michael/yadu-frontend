import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent } from './shared/components/app/app.component';
import { AuthRouteHostComponent } from './shared/components/auth-route-host/auth-route-host.component';
import { LoginComponent } from './shared/components/login/login.component';
import { sharedTranslations } from './shared/shared-translations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteHostComponent } from './shared/components/app-route-host/app-route-host.component';

Library.add(sharedTranslations);

@NgModule({
  declarations: [AppComponent, LoginComponent, AuthRouteHostComponent, AppRouteHostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateObjectLoader },
      useDefaultLang: true,
      defaultLanguage: 'de',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
