import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import AppConfig from "../core/app.config";
import LazyLoadService from "../core/lazy-load.service";

@Component({
    selector: "ac-about",
    // styleUrls: ["about.component.scss"],
    templateUrl: "about.component.html",
})
export default class AboutComponent implements OnInit {
    constructor(private config: AppConfig, private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(this.config.PAGE_TITLES_ABOUT);
    }
}
