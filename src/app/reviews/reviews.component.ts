import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { config } from "./reviews.config";

@Component({
    selector: "ac-reviews",
    // styleUrls: ["reviews.component.scss"],
    templateUrl: "reviews.component.html",
})
export default class ReviewsComponent implements OnInit {
    constructor(private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(config.meta.title);
    }
}
