import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';

import { YandexFotkiParserService } from './yandex-fotki-parser.service';

@Injectable()
export class PhotoService {
    private photoServiceUrl = 'http://api-fotki.yandex.ru/api/users/';
    private params = new URLSearchParams();

    constructor(private jsonp: Jsonp, private parserService: YandexFotkiParserService) {
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');
    }

    getPhotos(user: string, album: string): string[] {
        return [];
    }

    private getServiceDocument(user: string): Promise<any> {
        return this.jsonp
            .get(`${this.photoServiceUrl}/${user}/`, { search: this.params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private getAlbumsDocument(serviceDocument: Object): Promise<any> {
        const albumsUrl = this.parserService.extractAlbumsUrl(serviceDocument);

        return this.jsonp
            .get(albumsUrl, { search: this.params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private getAlbumPhotosDocument(albumsDocument: Object, album: string) {
        const albumUrl = this.parserService.extractAlbumUrl(albumsDocument);

        return this.jsonp
            .get(albumUrl, { search: this.params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) : Object {
        return response.json() || {};
    }

    private handleError(error: Response | any) {
        let errorMessage: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errorMessage = error.message ? error.message : error.toString();
        }

        console.error(errorMessage);

        return Promise.reject(errorMessage); 
    }
}