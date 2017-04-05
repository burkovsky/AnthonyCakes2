import { Pipe, PipeTransform } from "@angular/core";

import { appConfig } from "../../shared/configs/app.config";
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
                    `${appConfig.vk.baseUrl}${appConfig.vk.marketId}?w=product-${appConfig.vk.marketId}_${itemId}`;
            }

            transformed.push({
                ...photo,
                marketUrl,
            });
        }

        return transformed;
    }
}
