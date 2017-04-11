import { Pipe, PipeTransform } from "@angular/core";

import AppConfig from "../../core/app.config";
import Product from "./product.model";

@Pipe({
    name: "generateMarketUrl",
})
export default class GenerateMarketUrlPipe implements PipeTransform {
    constructor(private config: AppConfig) {}

    public transform(products: Product[]): Product[] {
        let transformed: Product[] = [];

        for (let product of products) {
            let marketUrl = "";
            if (product.tags.length) {
                const itemId = product.tags[product.tags.length - 1];
                marketUrl = `${this.config.VK.BASE_URL}${this.config.VK.MARKET_ID}?
                            w=product-${this.config.VK.MARKET_ID}_${itemId}`;
            }

            transformed.push({
                ...product,
                marketUrl,
            });
        }

        return transformed;
    }
}
