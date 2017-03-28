import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { metaConfig } from "../shared/configs/meta.config";
import LazyLoadService from "../shared/services/lazy-load.service";

@Component({
    selector: "ac-about",
    // styles: [String(require("./about.component.scss"))],
    template: require("./about.component.html"),
})
export default class AboutComponent implements OnInit {
    constructor(private lazyLoadService: LazyLoadService, private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(metaConfig.about.title);

        this.lazyLoadService.init();
    }
}
