import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { appConfig } from '../../../app.config';

import { YandexFotkiParserService } from './yandex-fotki-parser.service';

@Injectable()
export class PhotoService {
    private params = new URLSearchParams();

    constructor(private jsonp: Jsonp, private parserService: YandexFotkiParserService) {
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');
    }

    getPhotos(user: string, album: string): Observable<any> {
        const userServiceDocumentUrl = `${appConfig.photoServiceUrl}/${user}/`;

        return this.getDocument(userServiceDocumentUrl)
            .map(this.parserService.extractAlbumsUrl)
            .flatMap(url => this.getDocument(String(url)))
            .map(doc => this.parserService.extractAlbumUrl(doc, album))
            .flatMap(url => this.getDocument(String(url)))
            .map(this.parserService.extractAlbumPhotos);
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
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errorMessage = error.message ? error.message : error.toString();
        }

        console.error(errorMessage);

        return Observable.throw(errorMessage);
    }
}