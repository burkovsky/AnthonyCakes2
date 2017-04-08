import { Component, Input } from "@angular/core";

import Photo from "../shared/photo.model";

@Component({
    selector: "ac-card-details",
    styleUrls: ["card-details.component.scss"],
    templateUrl: "card-details.component.html",
})
export default class CardDetailsComponent {
    @Input()
    public card: Photo;

    public stop(event: Event) {
        event.stopPropagation();
    }
}