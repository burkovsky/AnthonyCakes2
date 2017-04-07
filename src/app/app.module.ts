import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import AboutModule from "./about/about.module";
import CoreModule from "./core/core.module";
import GalleryModule from "./gallery/gallery.module";
import ReviewsModule from "./reviews/reviews.module";

import AppComponent from "./app.component";
import { routes } from "./app.routes";
import ContactsComponent from "./layout/contacts/contacts.component";
import FooterComponent from "./layout/footer/footer.component";
import HeaderComponent from "./layout/header/header.component";
import NavMenuComponent from "./layout/nav-menu/nav-menu.component";
import ToTopComponent from "./layout/to-top/to-top.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ContactsComponent,
        FooterComponent,
        HeaderComponent,
        NavMenuComponent,
        ToTopComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        CoreModule,
        AboutModule,
        GalleryModule,
        ReviewsModule,
    ],
})
export default class AppModule {}
