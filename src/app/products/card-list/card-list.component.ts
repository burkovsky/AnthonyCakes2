import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import LazyLoadService from "../../core/lazy-load.service";
import { IProduct } from "../shared/product.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "ac-card-list",
    // styleUrls: ["card-list.component.scss"],
    templateUrl: "card-list.component.html",
})
export default class CardListComponent implements OnChanges {
    @Input()
    public cards: IProduct[];

    constructor(private lazyLoadService: LazyLoadService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes["cards"] && this.cards.length > 0) {
            this.lazyLoadService.delayedInit(250);
        }
    }
}
