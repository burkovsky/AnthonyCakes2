import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MetaModule } from "ng2-meta";

import AboutComponent from "./components/about/about.component";
import AppRootComponent from "./components/app-root/app-root.component";
import CardComponent from "./components/card/card.component";
import CardsComponent from "./components/cards/cards.component";
import ContactsComponent from "./components/contacts/contacts.component";
import GalleryComponent from "./components/gallery/gallery.component";
import NavMenuComponent from "./components/nav-menu/nav-menu.component";
import ToTopComponent from "./components/to-top/to-top.component";

import { metaConfig } from "./configs/meta.config";
import { routesConfig } from "./configs/routes.config";
import LazyLoadService from "./services/lazy-load.service";
import LocalStorageService from "./services/local-storage.service";

@NgModule({
    bootstrap: [AppRootComponent],
    declarations: [
        AboutComponent,
        CardComponent,
        CardsComponent,
        ContactsComponent,
        AppRootComponent,
        GalleryComponent,
        NavMenuComponent,
        ToTopComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(routesConfig),
        MetaModule.forRoot(metaConfig),
    ],
    providers: [
        LazyLoadService,
        LocalStorageService,
    ],
})
export default class AppModule {}
