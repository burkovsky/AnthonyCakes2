import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Title } from "@angular/platform-browser";

import AppConfig from "./app.config";
import LazyLoadService from "./lazy-load.service";
import LocalStorageService from "./local-storage.service";
import SessionStorageService from "./session-storage.service";

/*
Service module provides utility services.
Ideally, it consists entirely of providers and have no declarations.
Service module should only be imported by the root AppModule.
*/
@NgModule({
    imports: [CommonModule],
    providers: [
        AppConfig,
        LazyLoadService,
        LocalStorageService,
        SessionStorageService,
        Title,
    ],
})
export default class CoreModule {}
