import "core-js/client/shim";
import "reflect-metadata";
import "zone.js";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import AppModule from "./app/app.module";

if (process.env.PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
