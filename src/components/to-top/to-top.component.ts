import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

import { appConfig } from "../../configs/app.config";

@Component({
    selector: "ac-to-top",
    styles: [String(require("./to-top.component.scss"))],
    template: require("./to-top.component.html"),
})
export default class ToTopComponent {
    active = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.active = this.document.body.scrollTop > appConfig.scrollTopBound;
    }

    toTop() {
        window.scrollTo(0, 0);

        return false;
    }
}
