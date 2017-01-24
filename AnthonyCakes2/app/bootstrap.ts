import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRootModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppRootModule);