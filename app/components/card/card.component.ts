import { Component, Input } from '@angular/core';
import Photo from '../../models/photo';

@Component({
    selector: 'card',
    template: require('./card.component.html'),
    styles: [String(require('./card.component.scss'))]
})
export default class CardComponent {
    @Input() item: Photo;

    stop(event: any) {
        if (this.item['flipped'])
            event.stopPropagation();
        else
            event.preventDefault();
    }
}