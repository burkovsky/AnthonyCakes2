import { Pipe, PipeTransform } from "@angular/core";

import AppConfig from "../../core/app.config";
import Photo from "./photo.model";

@Pipe({
    name: "generateMarketUrl",
})
export default class GenerateMarketUrlPipe implements PipeTransform {
    constructor(private config: AppConfig) {}

    public transform(photos: Photo[]): Photo[] {
        let transformed: Photo[] = [];

        for (let photo of photos) {
            let marketUrl = "";
            if (photo.tags.length) {
                const itemId = photo.tags[photo.tags.length - 1];
                marketUrl = `${this.config.VK.BASE_URL}${this.config.VK.MARKET_ID}?
                            w=product-${this.config.VK.MARKET_ID}_${itemId}`;
            }

            transformed.push({
                ...photo,
                marketUrl,
            });
        }

        return transformed;
    }
}
