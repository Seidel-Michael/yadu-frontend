import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { API_BASE_URL_TOKEN } from './app/shared/injection-tokens/api-base-url.injection-token';
import { SERVER_URL_TOKEN } from './app/shared/injection-tokens/server-url.injection-token';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  { provide: API_BASE_URL_TOKEN, useValue: '/yadu/api/v1' },
  { provide: SERVER_URL_TOKEN, useValue: '' },
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
