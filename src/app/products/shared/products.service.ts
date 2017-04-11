import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { IAppState } from "../../app.state";
import AppConfig from "../../core/app.config";
import LocalStorageService from "../../core/local-storage.service";
import Photo from "./photo.model";
import PhotoService from "./photo.service";
import { LoadAction } from "./product-list.actions";

@Injectable()
export default class ProductsService {
    public products$: Observable<Photo[]>;
    private readonly CACHE_KEY = "products";
    private readonly PRODUCTS_STORE_KEY = "products";

    constructor(
        private store: Store<IAppState>,
        private config: AppConfig,
        private localStorageService: LocalStorageService,
        private photoService: PhotoService) {
        this.products$ = store.select(this.PRODUCTS_STORE_KEY);
    }

    public loadProducts() {
        const cachedProducts = this.localStorageService.getCache(this.CACHE_KEY);

        if (cachedProducts) {
            this.store.dispatch(new LoadAction(cachedProducts));
        } else {
            this.photoService
                .getPhotos(
                    this.config.PHOTO_SERVICE.BASE_URL,
                    this.config.PHOTO_SERVICE.USER,
                    this.config.PHOTO_SERVICE.ALBUM,
                    this.config.PHOTO_SERVICE.SORTING)
                .subscribe((products) => {
                    this.localStorageService.setCache(this.CACHE_KEY, products);
                    this.store.dispatch(new LoadAction(products));
                });
        }
    }
}
