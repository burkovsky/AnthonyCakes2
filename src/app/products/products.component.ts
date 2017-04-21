import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { IAppState } from "../app.state";
import { LoadAction } from "./shared/product-list.actions";
import ProductsService from "./shared/products.service";

@Component({
    selector: "ac-products",
    styleUrls: ["products.component.scss"],
    templateUrl: "products.component.html",
})
export default class ProductsComponent implements OnInit, OnDestroy {
    private onGetProducts: Subscription;

    constructor(private store: Store<IAppState>, private productsService: ProductsService) {}

    public ngOnInit() {
        this.onGetProducts = this.productsService.getProducts()
            .subscribe((products) => {
                this.store.dispatch(new LoadAction(products));
            });
    }

    public ngOnDestroy() {
        if (this.onGetProducts) {
            this.onGetProducts.unsubscribe();
        }
    }
}
