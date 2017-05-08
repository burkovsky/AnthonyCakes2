import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";

import AppConfig from "../../core/app.config";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "ac-cackle-comments",
    styleUrls: ["cackle-comments.component.scss"],
    templateUrl: "cackle-comments.component.html",
})
export default class CackleCommentsComponent implements OnInit, OnDestroy {
    private timer: any;

    constructor(private config: AppConfig) {}

    public ngOnInit(): void {
        const widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.push({
            guestHideEmail: true,
            id: this.config.CACKLE_WIDGET_ID,
            widget: "Comment",
        });

        this.timer = setInterval(() => this.bootstrap(), 250);
    }

    public ngOnDestroy(): void {
        const widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.pop();
    }

    private bootstrap() {
        if (Cackle) {
            Cackle.bootstrap(true);

            clearInterval(this.timer);
        }
    }
}
