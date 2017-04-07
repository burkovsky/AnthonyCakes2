import { Component, OnInit } from "@angular/core";

import { config } from "../reviews.config";

@Component({
    selector: "ac-vk-comments",
    // styleUrls: ["vk-comments.component.scss"],
    templateUrl: "vk-comments.component.html",
})
export default class VKCommentsComponent implements OnInit {
    public id: string = "vk_comments";

    public ngOnInit(): void {
        VK.Widgets.Comments(this.id, {
            attach: config.vk.commentsMedia,
            limit: config.vk.commentsLimit,
        });
    }
}
