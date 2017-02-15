import { AboutComponent } from '../components/about/about.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

export const routes = [
    {
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        data: {
            meta: {
                title: 'Вкусняшки'
            }
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            meta: {
                title: 'Обо мне'
            }
        }
    },
    {
        path: '**',
        redirectTo: 'gallery'
    }
];