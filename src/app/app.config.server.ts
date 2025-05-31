import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr'; // ✅ Correct import
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes), // ✅ Correct usage
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers

      provideShareButtonsOptions(
          shareIcons()
        ),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
