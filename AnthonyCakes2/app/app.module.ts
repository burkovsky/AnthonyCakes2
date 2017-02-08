import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRootComponent } from './components/app-root/app-root.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/card/card.component';

import { LocalStorageService } from './services/storage.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'gallery', pathMatch: 'full' },
            { path: 'gallery', component: GalleryComponent },
            { path: 'about', component: AboutComponent },
            { path: '**', redirectTo: 'gallery' }
        ], { useHash: true })
    ],
    declarations: [
        AppRootComponent,
        NavMenuComponent,
        ContactsComponent,
        AboutComponent,
        GalleryComponent,
        CardComponent
    ],
    providers: [LocalStorageService],
    bootstrap: [AppRootComponent]
})
export class AppModule {}