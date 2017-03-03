// jQuery Lazy
import 'jquery-lazy/jquery.lazy.js';

import { Injectable } from '@angular/core';

declare var jQuery: any;

@Injectable()
export default class LazyLoadService {
    private timer: any;

    delayedInit(delay: number) {
        this.timer = setInterval(() => this.init(), delay);
    }

    init() {
        let lazyItems = jQuery('.lazy');
        if (lazyItems.length) {
            lazyItems.Lazy({
                effect: 'fadeIn',
                effectTime: 750
            });

            if (this.timer)
                clearInterval(this.timer);
        }
    }
}