import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRootModule } from './modules/app-root/app-root.module';

platformBrowserDynamic().bootstrapModule(AppRootModule);