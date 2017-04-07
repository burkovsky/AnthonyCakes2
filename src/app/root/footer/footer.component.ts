import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ac-footer",
    styleUrls: ["footer.component.scss"],
    templateUrl: "footer.component.html",
})
export default class FooterComponent implements OnInit {
    public year: number;

    public ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
