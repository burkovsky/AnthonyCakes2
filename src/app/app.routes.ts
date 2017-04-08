import { Routes } from "@angular/router";

export const routes: Routes = [
    // {
    //     loadChildren: "app/gallery/gallery.module#GalleryModule",
    //     path: "gallery",
    // },
    // {
    //     loadChildren: "app/about/about.module#AboutModule",
    //     path: "about",
    // },
    // {
    //     loadChildren: "app/reviews/reviews.module#ReviewsModule",
    //     path: "reviews",
    // },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "products",
    },
    {
        path: "**",
        redirectTo: "products",
    },
];
