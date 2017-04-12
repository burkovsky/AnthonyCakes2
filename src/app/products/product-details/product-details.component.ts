import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import Product from "../shared/product.model";
import ProductsService from "../shared/products.service";

@Component({
    selector: "ac-product-details",
    styleUrls: ["product-details.component.scss"],
    templateUrl: "product-details.component.html",
})
export default class ProductDetailsComponent implements OnInit, OnDestroy {
    public product: Product;
    private onGetProduct: Subscription;

    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
        this.productsService.loadProduct(this.route.snapshot.params["id"]);
    }

    public ngOnInit() {
        this.onGetProduct = this.productsService.product$
            .subscribe((product) => this.product = product);
    }

    public ngOnDestroy() {
        this.onGetProduct.unsubscribe();
    }
}
