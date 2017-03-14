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
        data: {
            meta: {
                title: "Вкусняшки",
            },
        },
        path: "gallery",
    },
    {
        component: AboutComponent,
        data: {
            meta: {
                title: "Обо мне",
            },
        },
        path: "about",
    },
    {
        path: "**",
        redirectTo: "gallery",
    },
];
