import { Routes } from "@angular/router";

import ProductDetailsComponent from "./product-details/product-details.component";
import ProductListComponent from "./product-list/product-list.component";
import ProductsComponent from "./products.component";

export const routes: Routes = [
    {
        children: [
            {
                component: ProductListComponent,
                path: "",
            },
            {
                component: ProductDetailsComponent,
                path: ":id",
            },
        ],
        component: ProductsComponent,
        path: "products",
    },
];
