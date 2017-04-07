import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { config } from "./reviews.config";

@Component({
    selector: "ac-reviews",
    // styles: [String(require("./reviews.component.scss"))],
    template: require("./reviews.component.html"),
})
export default class ReviewsComponent implements OnInit {
    constructor(private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(config.meta.title);
    }
}
