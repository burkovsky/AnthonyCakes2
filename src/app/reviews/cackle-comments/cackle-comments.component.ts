import { Component, OnDestroy, OnInit } from "@angular/core";

import { appConfig } from "../../configs/app.config";

@Component({
    selector: "ac-cackle-comments",
    styles: [String(require("./cackle-comments.component.scss"))],
    template: require("./cackle-comments.component.html"),
})
export default class CackleCommentsComponent implements OnInit, OnDestroy {
    private timer: any;

    public ngOnInit(): void {
        let widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.push({
            guestHideEmail: true,
            id: appConfig.cackle.widgetId,
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
