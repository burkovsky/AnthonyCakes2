import "jquery-lazy/jquery.lazy.js";

import { Injectable } from "@angular/core";

@Injectable()
export default class LazyLoadService {
    private timer: any;

    public delayedInit(delay: number, selector = ".lazy") {
        this.timer = setInterval(() => this.init(selector), delay);
    }

    public init(selector = ".lazy") {
        const lazyItems = $(selector) as IJQueryLazyPlugin;
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
