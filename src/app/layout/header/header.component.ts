import { Component } from "@angular/core";

@Component({
    selector: "ac-header",
    styles: [String(require("./header.component.scss"))],
    template: require("./header.component.html"),
})
export default class HeaderComponent {}
