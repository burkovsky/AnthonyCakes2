﻿import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { metaConfig } from "../configs/meta.config";
import LazyLoadService from "../core/lazy-load.service";

@Component({
    selector: "ac-about",
    // styles: [String(require("./about.component.scss"))],
    template: require("./about.component.html"),
})
export default class AboutComponent implements OnInit {
    constructor(private lazyLoadService: LazyLoadService, private titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(metaConfig.about.title);

        this.lazyLoadService.init();
    }
}
