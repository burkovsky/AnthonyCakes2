import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import AppConfig from "../core/app.config";

@Component({
    selector: "ac-reviews",
    // styleUrls: ["reviews.component.scss"],
    templateUrl: "reviews.component.html",
})
export default class ReviewsComponent implements OnInit {
    constructor(
        private config: AppConfig,
        private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(this.config.PAGE_TITLES.REVIEWS);
    }
}
