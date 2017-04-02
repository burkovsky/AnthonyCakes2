import { Component, OnInit } from "@angular/core";

import { appConfig } from "../../shared/configs/app.config";

@Component({
    selector: "ac-cackle-comments",
    styles: [String(require("./cackle-comments.component.scss"))],
    template: require("./cackle-comments.component.html"),
})
export default class CackleCommentsComponent implements OnInit {
    ngOnInit(): void {
        let widgets = (window as IWindowCackleWidget).cackle_widget;
        widgets.push({
            guestHideEmail: true,
            id: appConfig.cackle.widgetId,
            widget: "Comment",
        });

        Cackle.bootstrap(true);
    }
}
