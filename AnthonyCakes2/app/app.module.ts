import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRootComponent } from './components/app-root/app-root.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'gallery', pathMatch: 'full' },
            { path: 'gallery', component: GalleryComponent },
            { path: 'about', component: AboutComponent },
            { path: '**', redirectTo: 'gallery' }
        ])
    ],
    declarations: [
        AppRootComponent,
        NavMenuComponent,
        ContactsComponent,
        AboutComponent,
        GalleryComponent
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule { }