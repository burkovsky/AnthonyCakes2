import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        loadChildren: "./about/about.module#AboutModule",
        path: "about",
    },
    {
        loadChildren: "./reviews/reviews.module#ReviewsModule",
        path: "reviews",
    },
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
