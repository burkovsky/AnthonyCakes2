import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

import AppConfig from "../../core/app.config";

@Component({
    selector: "ac-to-top",
    styleUrls: ["to-top.component.scss"],
    templateUrl: "to-top.component.html",
})
export default class ToTopComponent {
    public active = false;

    constructor(
        private config: AppConfig,
        @Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:scroll")
    public onWindowScroll() {
        this.active = this.document.body.scrollTop > this.config.SCROLL_TOP_BOUND;
    }

    public toTop() {
        window.scrollTo(0, 0);

        return false;
    }
}
