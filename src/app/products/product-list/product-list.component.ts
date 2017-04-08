import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import LocalStorageService from "../../core/local-storage.service";
import { config } from "../products.config";
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
        private photoService: PhotoService,
        private localStorageService: LocalStorageService,
        private titleService: Title) {}

    public ngOnInit() {
        this.titleService.setTitle(config.meta.title);

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
                config.photoService.baseUrl,
                config.photoService.user,
                config.photoService.album,
                config.photoService.sorting)
                .subscribe((photos) => {
                    this.localStorageService.setCache(key, photos);
                    this.products = photos;
                });
        }
    }
}
