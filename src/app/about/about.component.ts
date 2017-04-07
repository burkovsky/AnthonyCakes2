import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import LazyLoadService from "../core/lazy-load.service";
import { config } from "./about.config";

@Component({
    selector: "ac-about",
    // styleUrls: ["about.component.scss"],
    templateUrl: "about.component.html",
})
export default class AboutComponent implements OnInit {
    constructor(private lazyLoadService: LazyLoadService, private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(config.meta.title);

        this.lazyLoadService.init();
    }
}
