import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { IAppState } from "../../app.state";
import AppConfig from "../../core/app.config";
import { IProduct } from "../shared/product.model";

@Component({
    selector: "ac-product-list",
    styleUrls: ["product-list.component.scss"],
    templateUrl: "product-list.component.html",
})
export default class ProductListComponent implements OnInit, OnDestroy {
    public products: IProduct[];
    private products$: Observable<IProduct[]>;
    private onGetProducts: Subscription;

    constructor(
        private store: Store<IAppState>,
        private config: AppConfig,
        private titleService: Title) {
        this.products$ = this.store.select("products");
    }

    public ngOnInit() {
        this.titleService.setTitle(this.config.PAGE_TITLES_PRODUCTS);

        this.onGetProducts = this.products$
            .subscribe((products) => this.products = products);
    }

    public ngOnDestroy() {
        this.onGetProducts.unsubscribe();
    }
}
