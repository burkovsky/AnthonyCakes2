import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { appConfig } from '../../app.config';

import { YandexFotkiParserService } from './services/yandex-fotki-parser.service';
import { PhotoService } from './services/photo.service';

import { Photo } from './models/photo';

@Component({
    selector: 'gallery',
    template: require('./gallery.component.html'),
    styles: [String(require('./gallery.component.scss'))],
    providers: [YandexFotkiParserService, PhotoService]
})
export class GalleryComponent implements OnInit {
    photos: Photo[] = [];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.photoService.getPhotos(appConfig.user, appConfig.album)
            .subscribe(photos => this.photos = photos);
    }
}