import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { BrowserModule, Title } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import AboutComponent from "./components/about/about.component";
import AppRootComponent from "./components/app-root/app-root.component";
import CardComponent from "./components/card/card.component";
import CardsComponent from "./components/cards/cards.component";
import ContactsComponent from "./components/contacts/contacts.component";
import GalleryComponent from "./components/gallery/gallery.component";
import NavMenuComponent from "./components/nav-menu/nav-menu.component";
import ToTopComponent from "./components/to-top/to-top.component";

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
        JsonpModule,
        RouterModule.forRoot(routesConfig),
    ],
    providers: [
        LazyLoadService,
        LocalStorageService,
        Title,
    ],
})
export default class AppModule {}
