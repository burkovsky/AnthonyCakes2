import { Component, OnInit } from "@angular/core";

import LazyLoadService from "../../services/lazy-load.service";

@Component({
    selector: "about",
    // styles: [String(require('./about.component.scss'))],
    template: require("./about.component.html"),
})
export default class AboutComponent implements OnInit {
    constructor(private lazyLoadService: LazyLoadService) {}

    ngOnInit(): void {
        this.lazyLoadService.init();
    }
}
