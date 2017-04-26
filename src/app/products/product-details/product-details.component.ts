import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/combineLatest";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { IAppState } from "../../app.state";
import AppConfig from "../../core/app.config";
import SlickService from "../../core/slick.service";
import { LoadAction } from "../shared/product-details.actions";
import { IProduct } from "../shared/product.model";

@Component({
    selector: "ac-product-details",
    styleUrls: ["product-details.component.scss"],
    templateUrl: "product-details.component.html",
})
export default class ProductDetailsComponent implements OnInit, OnDestroy {
    public product: IProduct;
    private products$: Observable<IProduct[]>;
    private onGetProduct: Subscription;

    constructor(
        private store: Store<IAppState>,
        private route: ActivatedRoute,
        private config: AppConfig,
        private slickService: SlickService,
        private titleService: Title) {
        this.products$ = this.store.select("products");
    }

    public ngOnInit() {
        this.onGetProduct = this.route.params
            .map((params: Params) => +params["id"])
            .combineLatest(this.products$)
            .subscribe((result) => {
                let id = result[0];
                let products = result[1];

                if (products.length) {
                    let product = products.find((p) => p.id === id);
                    if (product) {
                        this.product = product;

                        this.slickService.delayedInit(250);
                        this.titleService.setTitle(`${product.title}${this.config.PAGE_TITLES_APPENDIX}`);
                        this.store.dispatch(new LoadAction(product));
                    }
                }
            });
    }

    public ngOnDestroy() {
        this.onGetProduct.unsubscribe();
    }
}
