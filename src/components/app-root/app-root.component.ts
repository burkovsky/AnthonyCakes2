import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";
import "jquery/dist/jquery.js";
import "tether/dist/css/tether.css";
import "tether/dist/js/tether.js";
import "../../common/main.scss";

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ac-app-root",
    styles: [String(require("./app-root.component.scss"))],
    template: require("./app-root.component.html"),
})
export default class AppRootComponent implements OnInit {
    year: number;

    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
