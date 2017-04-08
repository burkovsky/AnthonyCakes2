﻿import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import AboutModule from "./about/about.module";
import CoreModule from "./core/core.module";
import ProductsModule from "./products/products.module";
import ReviewsModule from "./reviews/reviews.module";

import AppComponent from "./app.component";
import { routes } from "./app.routes";
import ContactsComponent from "./root/contacts/contacts.component";
import FooterComponent from "./root/footer/footer.component";
import HeaderComponent from "./root/header/header.component";
import NavMenuComponent from "./root/nav-menu/nav-menu.component";
import ToTopComponent from "./root/to-top/to-top.component";

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
        AboutModule,
        CoreModule,
        ProductsModule,
        ReviewsModule,
    ],
})
export default class AppModule {}
