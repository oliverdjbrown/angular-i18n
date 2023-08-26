import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { TranslateService } from './translate.service';
import { provideHttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const defaultLang = navigator.language.slice(0, 2) || environment.defaultLang;

export function setupTranslateServiceFactory(
  service: TranslateService
): Function {
  return () => service.use(defaultLang);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
};
