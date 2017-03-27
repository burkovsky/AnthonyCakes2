import AboutComponent from "../components/about/about.component";
import GalleryComponent from "../components/gallery/gallery.component";

export const routesConfig = [
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
