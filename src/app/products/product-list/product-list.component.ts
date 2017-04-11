import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";

import { IAppState } from "../../app.state";
import AppConfig from "../../core/app.config";
import LocalStorageService from "../../core/local-storage.service";
import Photo from "../shared/photo.model";
import ProductsService from "../shared/products.service";

@Component({
    selector: "ac-product-list",
    styleUrls: ["product-list.component.scss"],
    templateUrl: "product-list.component.html",
})
export default class ProductListComponent implements OnInit, OnDestroy {
    public products: Photo[] = [];
    private onGetProducts: Subscription;

    constructor(
        private config: AppConfig,
        private productsService: ProductsService,
        private titleService: Title) {
        this.productsService.loadProducts();
    }

    public ngOnInit() {
        this.titleService.setTitle(this.config.PAGE_TITLES.PRODUCTS);

        this.onGetProducts = this.productsService.products$
            .subscribe((products) => this.products = products);
    }

    public ngOnDestroy() {
        this.onGetProducts.unsubscribe();
    }
}
