import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// ReSharper disable TsNotResolved
// Variable defined globally in the webpack config
if (process.env.NODE_ENV) {
// ReSharper restore TsNotResolved
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);