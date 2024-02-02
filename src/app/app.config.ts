import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {provideClientHydration, withHttpTransferCacheOptions} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    )
  ],
};
