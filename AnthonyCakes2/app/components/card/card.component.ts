import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    template: require('./card.component.html'),
    styles: [require('./card.component.scss')]
})
export class CardComponent {
    @Input() url: string;
    @Input() title: string;
}