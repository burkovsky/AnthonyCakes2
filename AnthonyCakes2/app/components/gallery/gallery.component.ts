import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { appConfig } from '../../app.config';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';
import { MasonryOptions } from 'angular2-masonry';

import { YandexFotkiParserService } from './services/yandex-fotki-parser.service';
import { PhotoService } from './services/photo.service';

import { Photo } from './models/photo';

@Component({
    selector: 'gallery',
    template: require('./gallery.component.html'),
    styles: [require('./gallery.component.scss')],
    providers: [YandexFotkiParserService, PhotoService]
})
export class GalleryComponent implements OnInit {
    photos: Photo[] = [];
    swiperConfig: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 1,
        centeredSlides: true,
        preventClicks: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        keyboardControl: true,
        loop: true
    };
    masonryConfig: MasonryOptions = {
        transitionDuration: '0.8s'
    };

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.photoService.getPhotos(appConfig.user, appConfig.album)
            .subscribe(photos => this.photos = photos);
    }
}