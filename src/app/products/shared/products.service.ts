import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { IAppState } from "../../app.state";
import AppConfig from "../../core/app.config";
import LocalStorageService from "../../core/local-storage.service";
import PhotoService from "./photo.service";
import { LoadAction as LoadProductAction } from "./product-details.actions";
import { LoadAction as LoadProductsAction } from "./product-list.actions";
import Product from "./product.model";

@Injectable()
export default class ProductsService {
    public product$: Observable<Product>;
    public products$: Observable<Product[]>;
    private readonly CACHE_KEY = "products";
    private readonly PRODUCT_STORE_KEY = "product";
    private readonly PRODUCTS_STORE_KEY = "products";

    constructor(
        private store: Store<IAppState>,
        private config: AppConfig,
        private localStorageService: LocalStorageService,
        private photoService: PhotoService) {
        this.product$ = store.select(this.PRODUCT_STORE_KEY);
        this.products$ = store.select(this.PRODUCTS_STORE_KEY);
    }

    public loadProducts() {
        const cachedProducts = this.localStorageService.getCache(this.CACHE_KEY);

        if (cachedProducts) {
            this.store.dispatch(new LoadProductsAction(cachedProducts));
        } else {
            this.photoService
                .getPhotos(
                    this.config.PHOTO_SERVICE.BASE_URL,
                    this.config.PHOTO_SERVICE.USER,
                    this.config.PHOTO_SERVICE.ALBUM,
                    this.config.PHOTO_SERVICE.SORTING)
                .subscribe((products) => {
                    this.localStorageService.setCache(this.CACHE_KEY, products);
                    this.store.dispatch(new LoadProductsAction(products));
                });
        }
    }

    public loadProduct(id: number | string) {
        this.loadProducts();

        this.products$.subscribe((products) => {
            let product = products.find((p) => p.id === +id);
            this.store.dispatch(new LoadProductAction(product));
        });
    }
}
