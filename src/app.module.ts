import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { BrowserModule, Title } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import AppComponent from "./app.component";
import AboutComponent from "./components/about/about.component";
import CardComponent from "./components/card/card.component";
import CardsComponent from "./components/cards/cards.component";
import ContactsComponent from "./components/contacts/contacts.component";
import GalleryComponent from "./components/gallery/gallery.component";
import NavMenuComponent from "./components/nav-menu/nav-menu.component";
import ToTopComponent from "./components/to-top/to-top.component";

import LazyLoadService from "./services/lazy-load.service";
import LocalStorageService from "./services/local-storage.service";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        CardComponent,
        CardsComponent,
        ContactsComponent,
        GalleryComponent,
        NavMenuComponent,
        ToTopComponent,
    ],
    imports: [
        BrowserModule,
        JsonpModule,
        AppRoutingModule,
    ],
    providers: [
        LazyLoadService,
        LocalStorageService,
        Title,
    ],
})
export default class AppModule {}
