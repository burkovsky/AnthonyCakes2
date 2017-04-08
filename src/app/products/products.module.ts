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
import Photo from "./shared/photo.model";
import PhotoService from "./shared/photo.service";
import YandexFotkiParserService from "./shared/yandex-fotki-parser.service";

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
        YandexFotkiParserService,
    ],
})
export default class ProductsModule {}
