import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ac-footer",
    styles: [String(require("./footer.component.scss"))],
    template: require("./footer.component.html"),
})
export default class FooterComponent implements OnInit {
    public year: number;

    public ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
