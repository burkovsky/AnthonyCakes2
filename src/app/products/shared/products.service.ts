import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import AppConfig from "../../core/app.config";
import { IProduct } from "./product.model";

interface IProductsResponse {
    count: number;
    items: IProduct[];
}

@Injectable()
export default class ProductsService {
    constructor(private http: Http, private config: AppConfig) {}

    public getProducts(): Observable<IProduct[]> {
        return this.http
            .get(this.config.API_URLS_PRODUCTS)
            .map(this.extractData)
            .map((data: IProductsResponse) => data.items)
            .catch(this.handleError);
    }

    private extractData(response: Response): Object {
        return response.json() || {};
    }

    private handleError(error: Response | any) {
        let errorMessage: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errorMessage = `${error.status} - ${error.statusText} ${err}`;
        } else {
            errorMessage = error.message ? error.message : error.toString();
        }

        console.error(errorMessage);

        return Observable.throw(errorMessage);
    }
}
