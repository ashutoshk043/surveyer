import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideShareButtonsOptions, withConfig } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    // provideClientHydration(withEventReplay()),  // this diasbles event reply in network tab

    provideShareButtonsOptions(
      withConfig({
        include: ['facebook', 'pinterest', 'x']
      })
    ),
    provideShareButtonsOptions(
      shareIcons()
    ),

    provideHttpClient(
      withFetch(),
    ),

    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
};
