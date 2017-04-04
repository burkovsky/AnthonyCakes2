import { Component, Input } from "@angular/core";

import Photo from "../shared/photo.model";

@Component({
    selector: "ac-card",
    styles: [String(require("./card.component.scss"))],
    template: require("./card.component.html"),
})
export default class CardComponent {
    @Input()
    public item: Photo;

    public stop(event: Event) {
        event.stopPropagation();
    }
}
