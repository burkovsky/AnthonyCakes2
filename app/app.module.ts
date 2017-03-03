import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MetaModule } from 'ng2-meta';

import { routesConfig } from './configs/routes.config';
import { metaConfig } from './configs/meta.config';
import AppRootComponent from './components/app-root/app-root.component';
import NavMenuComponent from './components/nav-menu/nav-menu.component';
import ContactsComponent from './components/contacts/contacts.component';
import ToTopComponent from './components/to-top/to-top.component';
import AboutComponent from './components/about/about.component';
import GalleryComponent from './components/gallery/gallery.component';
import CardsComponent from './components/cards/cards.component';
import CardComponent from './components/card/card.component';
import LazyLoadService from './services/lazy-load.service';
import { LocalStorageService } from './services/storage.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(routesConfig),
        MetaModule.forRoot(metaConfig)
    ],
    declarations: [
        AppRootComponent,
        NavMenuComponent,
        ContactsComponent,
        ToTopComponent,
        AboutComponent,
        GalleryComponent,
        CardsComponent,
        CardComponent
    ],
    providers: [
        LazyLoadService,
        LocalStorageService
    ],
    bootstrap: [AppRootComponent]
})
export default class AppModule {}