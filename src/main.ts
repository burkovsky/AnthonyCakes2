import "core-js/client/shim";
import "reflect-metadata";
import "zone.js";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import AppModule from "./app/app.module";

// Variable defined globally in the webpack config
if (process.env.NODE_ENV) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
