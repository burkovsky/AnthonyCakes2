import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import Photo from "../../models/photo";
import LazyLoadService from "../../services/lazy-load.service";

@Component({
    selector: "ac-cards",
    // styles: [String(require('./cards.component.scss'))],
    template: require("./cards.component.html"),
})
export default class CardsComponent implements OnChanges {
    @Input() items: Photo[];

    constructor(private lazyLoadService: LazyLoadService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.items && this.items.length > 0) {
            this.lazyLoadService.delayedInit(250);
        }
    }
}
