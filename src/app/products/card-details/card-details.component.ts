import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import Product from "../shared/product.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "ac-card-details",
    styleUrls: ["card-details.component.scss"],
    templateUrl: "card-details.component.html",
})
export default class CardDetailsComponent {
    @Input()
    public card: Product;

    public stop(event: Event) {
        event.stopPropagation();
    }
}
