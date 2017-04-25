import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

import { Injectable } from "@angular/core";

@Injectable()
export default class SlickService {
    private timer: any;

    public delayedInit(timeout: number, selector = ".slick") {
        this.timer = setInterval(() => this.init(selector), timeout);
    }

    public init(selector = ".slick") {
        const slickItems = $(selector) as ISlick;
        if (slickItems.length) {
            slickItems.slick({
                dots: true,
                fade: true,
                mobileFirst: true,
            });

            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
}
