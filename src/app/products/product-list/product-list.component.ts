import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import AppConfig from "../../core/app.config";
import LocalStorageService from "../../core/local-storage.service";
import Photo from "../shared/photo.model";
import PhotoService from "../shared/photo.service";
import YandexFotkiParserService from "../shared/yandex-fotki-parser.service";

@Component({
    selector: "ac-product-list",
    styleUrls: ["product-list.component.scss"],
    templateUrl: "product-list.component.html",
})
export default class ProductListComponent implements OnInit, OnDestroy {
    public products: Photo[] = [];
    private onGetPhotos: Subscription;

    constructor(
        private config: AppConfig,
        private photoService: PhotoService,
        private localStorageService: LocalStorageService,
        private titleService: Title) {}

    public ngOnInit() {
        this.titleService.setTitle(this.config.PAGE_TITLES.PRODUCTS);

        this.getPhotos();
    }

    public ngOnDestroy() {
        if (this.onGetPhotos) {
            this.onGetPhotos.unsubscribe();
        }
    }

    private getPhotos() {
        const key = "products";
        const cachedProducts = this.localStorageService.getCache(key);

        if (cachedProducts) {
            this.products = cachedProducts;
        } else {
            this.onGetPhotos = this.photoService.getPhotos(
                this.config.PHOTO_SERVICE.BASE_URL,
                this.config.PHOTO_SERVICE.USER,
                this.config.PHOTO_SERVICE.ALBUM,
                this.config.PHOTO_SERVICE.SORTING)
                .subscribe((photos) => {
                    this.localStorageService.setCache(key, photos);
                    this.products = photos;
                });
        }
    }
}
