import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { IAppState } from "../app.state";
import AppConfig from "../core/app.config";
import LocalStorageService from "../core/local-storage.service";
import PhotoService from "./shared/photo.service";
import { LoadAction } from "./shared/product-list.actions";
import Product from "./shared/product.model";

@Component({
    selector: "ac-products",
    styleUrls: ["products.component.scss"],
    templateUrl: "products.component.html",
})
export default class ProductsComponent implements OnInit, OnDestroy {
    private onGetProducts: Subscription;

    constructor(
        private store: Store<IAppState>,
        private config: AppConfig,
        private localStorageService: LocalStorageService,
        private photoService: PhotoService) {
    }

    public ngOnInit() {
        this.loadProducts();
    }

    public ngOnDestroy() {
        if (this.onGetProducts) {
            this.onGetProducts.unsubscribe();
        }
    }

    private loadProducts() {
        const CACHE_KEY = "products";
        const cachedProducts: Product[] = this.localStorageService.getCache(CACHE_KEY);

        if (cachedProducts) {
            this.store.dispatch(new LoadAction(cachedProducts));
        } else {
            this.onGetProducts = this.photoService
                .getProducts(
                    this.config.PHOTO_SERVICE.BASE_URL,
                    this.config.PHOTO_SERVICE.USER,
                    this.config.PHOTO_SERVICE.ALBUM,
                    this.config.PHOTO_SERVICE.SORTING)
                .subscribe((products) => {
                    this.localStorageService.setCache(CACHE_KEY, products);
                    this.store.dispatch(new LoadAction(products));
                });
        }
    }
}
