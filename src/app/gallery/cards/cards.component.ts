import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import LazyLoadService from "../../shared/services/lazy-load.service";
import Photo from "../shared/photo.model";

@Component({
    selector: "ac-cards",
    // styles: [String(require('./cards.component.scss'))],
    template: require("./cards.component.html"),
})
export default class CardsComponent implements OnChanges {
    @Input()
    public items: Photo[];

    constructor(private lazyLoadService: LazyLoadService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.items && this.items.length > 0) {
            this.lazyLoadService.delayedInit(250);
        }
    }
}
