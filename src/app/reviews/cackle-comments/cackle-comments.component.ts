import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";

import { config } from "../reviews.config";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "ac-cackle-comments",
    styleUrls: ["cackle-comments.component.scss"],
    templateUrl: "cackle-comments.component.html",
})
export default class CackleCommentsComponent implements OnInit, OnDestroy {
    private timer: any;

    public ngOnInit(): void {
        let widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.push({
            guestHideEmail: true,
            id: config.cackle.widgetId,
            widget: "Comment",
        });

        this.timer = setInterval(() => this.bootstrap(), 250);
    }

    public ngOnDestroy(): void {
        let widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.pop();
    }

    private bootstrap() {
        if (Cackle) {
            Cackle.bootstrap(true);

            clearInterval(this.timer);
        }
    }
}
