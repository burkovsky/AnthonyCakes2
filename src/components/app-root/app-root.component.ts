import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";
import "jquery/dist/jquery.js";
import "tether/dist/css/tether.css";
import "tether/dist/js/tether.js";
import "../../common/main.scss";
import "../../rxjs-operators";

import { Component, OnInit } from "@angular/core";
import { MetaService } from "ng2-meta";

@Component({
    selector: "app-root",
    styles: [String(require("./app-root.component.scss"))],
    template: require("./app-root.component.html"),
})
export default class AppRootComponent implements OnInit {
    year: number;

    constructor(private metaService: MetaService) {}

    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
