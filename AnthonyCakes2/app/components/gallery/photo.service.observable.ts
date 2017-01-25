import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {
    private photoServiceUrl = 'http://api-fotki.yandex.ru/api/users/alekna';

    constructor(private http: Http) { }

    getPhotos(): Observable<string[]> {
        return this.http
            .get(this.photoServiceUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
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