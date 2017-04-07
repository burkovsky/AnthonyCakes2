import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import CardComponent from "./card/card.component";
import CardsComponent from "./cards/cards.component";
import GalleryComponent from "./gallery.component";
import { routes } from "./gallery.routes";
import GenerateMarketUrlPipe from "./shared/generate-market-url.pipe";
import Photo from "./shared/photo.model";
import PhotoService from "./shared/photo.service";
import YandexFotkiParserService from "./shared/yandex-fotki-parser.service";

@NgModule({
    declarations: [
        CardComponent,
        CardsComponent,
        GalleryComponent,
        GenerateMarketUrlPipe,
    ],
    imports: [
        CommonModule,
        JsonpModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        YandexFotkiParserService,
        PhotoService,
    ],
})
export default class GalleryModule {}
