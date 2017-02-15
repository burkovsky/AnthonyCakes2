import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../models/photo';

import { LazyLoadService } from '../../services/lazy-load.service';

@Component({
    selector: 'cards',
    template: require('./cards.component.html'),
    styles: [String(require('./cards.component.scss'))]
})
export class CardsComponent implements OnChanges {
    @Input() items: Photo[];

    constructor(private lazyLoadService: LazyLoadService) {}

    stop(event: any) {
        event.stopPropagation();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && this.items.length > 0) {
            this.lazyLoadService.delayedInit(250);
        }
    }
}