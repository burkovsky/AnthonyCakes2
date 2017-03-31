import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { BrowserModule, Title } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import AboutComponent from "./about/about.component";
import AppComponent from "./app.component";
import { routes } from "./app.routes";
import CardComponent from "./gallery/card/card.component";
import CardsComponent from "./gallery/cards/cards.component";
import GalleryComponent from "./gallery/gallery.component";
import ContactsComponent from "./layout/contacts/contacts.component";
import NavMenuComponent from "./layout/nav-menu/nav-menu.component";
import ToTopComponent from "./layout/to-top/to-top.component";
import ReviewsComponent from "./reviews/reviews.component";
import VKCommentsComponent from "./reviews/vk-comments/vk-comments.component";
import LazyLoadService from "./shared/services/lazy-load.service";
import LocalStorageService from "./shared/services/local-storage.service";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ContactsComponent,
        NavMenuComponent,
        ToTopComponent,
        GalleryComponent,
        CardComponent,
        CardsComponent,
        AboutComponent,
        ReviewsComponent,
        VKCommentsComponent,
    ],
    imports: [
        BrowserModule,
        JsonpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        LazyLoadService,
        LocalStorageService,
        Title,
    ],
})
export default class AppModule {}
