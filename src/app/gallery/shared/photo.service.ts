import { Injectable } from "@angular/core";
import { Jsonp, Response, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Observable } from "rxjs/Observable";

import { appConfig } from "../../shared/configs/app.config";
import Photo from "./photo.model";
import YandexFotkiParserService from "./yandex-fotki-parser.service";

@Injectable()
export default class PhotoService {
    private params = new URLSearchParams();

    constructor(private jsonp: Jsonp, private parserService: YandexFotkiParserService) {
        this.params.set("format", "json");
        this.params.set("callback", "JSONP_CALLBACK");
    }

    // TODO Support next pages loading
    public getPhotos(user: string, album: string): Observable<Photo[]> {
        const userServiceDocumentUrl = `${appConfig.photoService.url}/${user}/`;

        return this.getDocument(userServiceDocumentUrl)
            .map((doc) => this.parserService.extractAlbumsUrl(doc))
            .flatMap((url) => this.getDocument(String(url)))
            .map((doc) => this.parserService.extractAlbumUrl(doc, album, appConfig.photoService.sorting))
            .flatMap((url) => this.getDocument(String(url)))
            .map((doc) => this.parserService.extractAlbumPhotos(doc));
    }

    private getDocument(documentUrl: string): Observable<Object> {
        if (!documentUrl) {
            return Observable.throw("Incorrect URL");
        }

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
}
