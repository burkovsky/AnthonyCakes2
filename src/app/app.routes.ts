import { Routes } from "@angular/router";

import AboutComponent from "./about/about.component";
import GalleryComponent from "./gallery/gallery.component";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "gallery",
    },
    {
        component: GalleryComponent,
        path: "gallery",
    },
    {
        component: AboutComponent,
        path: "about",
    },
    {
        path: "**",
        redirectTo: "gallery",
    },
];
