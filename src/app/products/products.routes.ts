import { Routes } from "@angular/router";

import ProductDetailsComponent from "./product-details/product-details.component";
import ProductListComponent from "./product-list/product-list.component";

export const routes: Routes = [
    {
        component: ProductListComponent,
        path: "products",
    },
    {
        component: ProductDetailsComponent,
        path: "products/:id",
    },
];
