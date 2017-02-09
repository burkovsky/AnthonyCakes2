﻿// jQuery Lazy Load
import 'jquery-lazyload/jquery.lazyload.js';

import { Component, Input, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';

import { Photo } from '../../models/photo';

declare var jQuery: any;

@Component({
    selector: 'cards',
    template: require('./cards.component.html'),
    styles: [String(require('./cards.component.scss'))]
})
export class CardsComponent implements OnChanges, AfterViewChecked {
    @Input() items: Photo[];

    private itemsLoaded = false;
    private lazyLoadInitialized = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && this.items.length > 0) {
            this.itemsLoaded = true;
        }
    }

    ngAfterViewChecked(): void {
        if (this.itemsLoaded && !this.lazyLoadInitialized) {
            this.initLazyload();
        }
    }

    private initLazyload() {
        let lazyItems = jQuery('.lazy');
        if (lazyItems.length) {
            lazyItems.lazyload({
                effect: 'fadeIn',
                threshold: 200
            });

            this.lazyLoadInitialized = true;
        }
    }
}