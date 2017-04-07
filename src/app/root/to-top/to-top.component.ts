import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

import { config } from "../root.config";

@Component({
    selector: "ac-to-top",
    styleUrls: ["to-top.component.scss"],
    templateUrl: "to-top.component.html",
})
export default class ToTopComponent {
    public active = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:scroll")
    public onWindowScroll() {
        this.active = this.document.body.scrollTop > config.scrollTopBound;
    }

    public toTop() {
        window.scrollTo(0, 0);

        return false;
    }
}
