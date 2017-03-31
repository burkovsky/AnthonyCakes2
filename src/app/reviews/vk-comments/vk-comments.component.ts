import { Component, OnInit } from "@angular/core";

import { appConfig } from "../../shared/configs/app.config";

@Component({
    selector: "ac-vk-comments",
    // styles: [String(require("./vk-comments.component.scss"))],
    template: require("./vk-comments.component.html"),
})
export default class VKCommentsComponent implements OnInit {
    id: string = "vk_comments";

    ngOnInit(): void {
        VK.Widgets.Comments(this.id, {
            attach: appConfig.vk.commentsMedia,
            limit: appConfig.vk.commentsLimit,
        });
    }
}
