import { Component, OnInit } from "@angular/core";

import AppConfig from "../../core/app.config";

@Component({
    selector: "ac-vk-comments",
    // styleUrls: ["vk-comments.component.scss"],
    templateUrl: "vk-comments.component.html",
})
export default class VKCommentsComponent implements OnInit {
    public id: string = "vk_comments";

    constructor(private config: AppConfig) {}

    public ngOnInit(): void {
        VK.Widgets.Comments(this.id, {
            attach: this.config.VK.COMMENTS_MEDIA,
            limit: this.config.VK.COMMENTS_LIMIT,
        });
    }
}
