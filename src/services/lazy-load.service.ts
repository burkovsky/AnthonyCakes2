import "jquery-lazy/jquery.lazy.js";

import { Injectable } from "@angular/core";

declare var jQuery: any;

@Injectable()
export default class LazyLoadService {
    private timer: any;

    public delayedInit(delay: number) {
        this.timer = setInterval(() => this.init(), delay);
    }

    public init() {
        let lazyItems = jQuery(".lazy");
        if (lazyItems.length) {
            lazyItems.Lazy({
                effect: "fadeIn",
                effectTime: 750,
            });

            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
}
