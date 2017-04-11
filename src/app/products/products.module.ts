import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import CardDetailsComponent from "./card-details/card-details.component";
import CardListComponent from "./card-list/card-list.component";
import ProductDetailsComponent from "./product-details/product-details.component";
import ProductListComponent from "./product-list/product-list.component";
import { routes } from "./products.routes";
import GenerateMarketUrlPipe from "./shared/generate-market-url.pipe";
import PhotoService from "./shared/photo.service";
import Product from "./shared/product.model";
import ProductsService from "./shared/products.service";
import YandexFotkiParserService from "./shared/yandex-fotki-parser.service";

/*
Routed feature modules are domain feature modules whose top components are the targets of router navigation routes.
All lazy-loaded modules are routed feature modules by definition.
Routed feature modules shouldn't export anything.
A lazy-loaded routed feature module should not be imported by any module.
Routed Feature Modules rarely have providers.
Don't provide application-wide services in a routed feature module or in a module that the routed module imports.
Do not use export default with routed feature modules.
*/
@NgModule({
    declarations: [
        CardDetailsComponent,
        CardListComponent,
        // ProductDetailsComponent,
        ProductListComponent,
        GenerateMarketUrlPipe,
    ],
    imports: [
        CommonModule,
        JsonpModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        PhotoService,
        ProductsService,
        YandexFotkiParserService,
    ],
})
export class ProductsModule {}
