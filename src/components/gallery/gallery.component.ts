import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { appConfig } from "../../configs/app.config";
import Photo from "../../models/photo";
import LocalStorageService from "../../services/local-storage.service";
import PhotoService from "./services/photo.service";
import YandexFotkiParserService from "./services/yandex-fotki-parser.service";

@Component({
    providers: [YandexFotkiParserService, PhotoService],
    selector: "ac-gallery",
    styles: [String(require("./gallery.component.scss"))],
    template: require("./gallery.component.html"),
})
export default class GalleryComponent implements OnInit {
    photos: Photo[] = [];

    constructor(private photoService: PhotoService, private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        const key = "photos";
        const cachedPhotos = this.localStorageService.getCache(key);

        if (cachedPhotos) {
            this.photos = cachedPhotos;
        } else {
            this.photoService.getPhotos(appConfig.photoService.user, appConfig.photoService.album)
                .subscribe((photos) => {
                    this.localStorageService.setCache(key, photos);
                    this.photos = photos;
                });
        }
    }
}
