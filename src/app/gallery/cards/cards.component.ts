import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import LazyLoadService from "../../core/lazy-load.service";
import Photo from "../shared/photo.model";

@Component({
    selector: "ac-cards",
    // styleUrls: ["cards.component.scss"],
    templateUrl: "cards.component.html",
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
