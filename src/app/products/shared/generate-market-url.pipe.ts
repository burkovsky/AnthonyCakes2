import { Pipe, PipeTransform } from "@angular/core";

import { config } from "../products.config";
import Photo from "./photo.model";

@Pipe({
    name: "generateMarketUrl",
})
export default class GenerateMarketUrlPipe implements PipeTransform {
    public transform(photos: Photo[]): Photo[] {
        let transformed: Photo[] = [];

        for (let photo of photos) {
            let marketUrl = "";
            if (photo.tags.length) {
                const itemId = photo.tags[photo.tags.length - 1];
                marketUrl =
                    `${config.vk.baseUrl}${config.vk.marketId}?w=product-${config.vk.marketId}_${itemId}`;
            }

            transformed.push({
                ...photo,
                marketUrl,
            });
        }

        return transformed;
    }
}
