import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { appConfig } from '../../../configs/app.config';

import { Photo } from '../../../models/photo';

import { YandexFotkiParserService } from './yandex-fotki-parser.service';

@Injectable()
export class PhotoService {
    private params = new URLSearchParams();

    constructor(private jsonp: Jsonp, private parserService: YandexFotkiParserService) {
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');
    }

    // TODO Support next pages loading
    getPhotos(user: string, album: string): Observable<any> {
        const userServiceDocumentUrl = `${appConfig.photoService.url}/${user}/`;

        return this.getDocument(userServiceDocumentUrl)
            .map(doc => this.parserService.extractAlbumsUrl(doc))
            .flatMap(url => this.getDocument(String(url)))
            .map(doc => this.parserService.extractAlbumUrl(doc, album, appConfig.photoService.sorting))
            .flatMap(url => this.getDocument(String(url)))
            .map(doc => {
                let photos = this.parserService.extractAlbumPhotos(doc);
                this.generateMarketUrls(photos);
                return photos;
            });
    }

    private getDocument(documentUrl: string): Observable<any> {
        if (!documentUrl)
            return Observable.throw('Incorrect URL');

        return this.jsonp
            .get(documentUrl, { search: this.params })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response): Object {
        return response.json() || {};
    }

    private handleError(error: Response | any) {
        let errorMessage: string;
        if (error instanceof Response) {
            errorMessage = `${error.status} - ${error.statusText} ${error.text()}`;
        } else {
            errorMessage = error.message ? error.message : error.toString();
        }

        console.error(errorMessage);

        return Observable.throw(errorMessage);
    }

    private generateMarketUrls(photos: Photo[]) {
        for (let photo of photos) {
            if (photo.tags.length) {
                let itemId = photo.tags[photo.tags.length - 1];
                photo.marketUrl = `${appConfig.vk.baseUrl}${appConfig.vk.marketId}?w=product-${appConfig.vk.marketId}_${itemId}`
            }
        }
    }
}