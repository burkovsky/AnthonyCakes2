// jQuery Lazy
import 'jquery-lazy/jquery.lazy.js';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../models/photo';

declare var jQuery: any;

@Component({
    selector: 'cards',
    template: require('./cards.component.html'),
    styles: [String(require('./cards.component.scss'))]
})
export class CardsComponent implements OnChanges {
    @Input() items: Photo[];

    private timer: any;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && this.items.length > 0) {
            this.timer = setInterval(() => this.initLazyload(), 250);
        }
    }

    private initLazyload() {
        let lazyItems = jQuery('.lazy');
        if (lazyItems.length) {
            lazyItems.Lazy({
                effect: 'fadeIn',
                effectTime: 750
            });

            clearInterval(this.timer);
        }
    }
}