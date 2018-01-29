import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import CoreModule from "./core/core.module";
import { ProductsModule } from "./products/products.module";

import AppComponent from "./app.component";
import { reducers } from "./app.reducers";
import { routes } from "./app.routes";
import ContactsComponent from "./root/contacts/contacts.component";
import FooterComponent from "./root/footer/footer.component";
import HeaderComponent from "./root/header/header.component";
import NavMenuComponent from "./root/nav-menu/nav-menu.component";
import ToTopComponent from "./root/to-top/to-top.component";

const devImports = !process.env.PRODUCTION
    ? [StoreDevtoolsModule.instrument()]
    : [];

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
        StoreModule.forRoot(reducers),
        ...devImports,
        CoreModule,
        ProductsModule,
    ],
})
export default class AppModule {}
