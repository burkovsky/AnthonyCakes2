import "core-js/client/shim";
import "reflect-metadata";
import "zone.js";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import AppModule from "./app/app.module";
import { appConfig } from "./app/shared/configs/app.config";

if (process.env.NODE_ENV === appConfig.environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
