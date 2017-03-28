import "jquery-lazy/jquery.lazy.js";

import { Injectable } from "@angular/core";

@Injectable()
export default class LazyLoadService {
    private timer: any;

    public delayedInit(delay: number) {
        this.timer = setInterval(() => this.init(), delay);
    }

    public init() {
        const lazyItems = $(".lazy") as IJQueryLazyPlugin;
        if (lazyItems.length) {
            lazyItems.Lazy({
                effect: "fadeIn",
                effectTime: 500,
            });

            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
}
