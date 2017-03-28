import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { appConfig } from "../shared/configs/app.config";
import { metaConfig } from "../shared/configs/meta.config";
import LocalStorageService from "../shared/services/local-storage.service";
import Photo from "./shared/photo.model";
import PhotoService from "./shared/photo.service";
import YandexFotkiParserService from "./shared/yandex-fotki-parser.service";

@Component({
    providers: [YandexFotkiParserService, PhotoService],
    selector: "ac-gallery",
    styles: [String(require("./gallery.component.scss"))],
    template: require("./gallery.component.html"),
})
export default class GalleryComponent implements OnInit, OnDestroy {
    photos: Photo[] = [];
    onGetPhotos: Subscription;

    constructor(
        private photoService: PhotoService,
        private localStorageService: LocalStorageService,
        private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle(metaConfig.gallery.title);

        this.getPhotos();
    }

    ngOnDestroy() {
        if (this.onGetPhotos) {
            this.onGetPhotos.unsubscribe();
        }
    }

    getPhotos() {
        const key = "photos";
        const cachedPhotos = this.localStorageService.getCache(key);

        if (cachedPhotos) {
            this.photos = cachedPhotos;
        } else {
            this.onGetPhotos = this.photoService.getPhotos(appConfig.photoService.user, appConfig.photoService.album)
                .subscribe((photos) => {
                    this.localStorageService.setCache(key, photos);
                    this.photos = photos;
                });
        }
    }
}
