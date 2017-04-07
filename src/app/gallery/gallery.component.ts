import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import LocalStorageService from "../core/local-storage.service";
import { config } from "./gallery.config";
import Photo from "./shared/photo.model";
import PhotoService from "./shared/photo.service";
import YandexFotkiParserService from "./shared/yandex-fotki-parser.service";

@Component({
    selector: "ac-gallery",
    styleUrls: ["gallery.component.scss"],
    templateUrl: "gallery.component.html",
})
export default class GalleryComponent implements OnInit, OnDestroy {
    public photos: Photo[] = [];
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
        const key = "photos";
        const cachedPhotos = this.localStorageService.getCache(key);

        if (cachedPhotos) {
            this.photos = cachedPhotos;
        } else {
            this.onGetPhotos = this.photoService.getPhotos(
                config.photoService.baseUrl,
                config.photoService.user,
                config.photoService.album,
                config.photoService.sorting)
                .subscribe((photos) => {
                    this.localStorageService.setCache(key, photos);
                    this.photos = photos;
                });
        }
    }
}
