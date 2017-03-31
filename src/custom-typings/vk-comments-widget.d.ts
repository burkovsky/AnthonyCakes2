// Type definitions for VK Comments Widget
// Project: https://vk.com/dev/widget_comments
// Definitions by: Anton Burkovskii <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IVKCommentsWidgetOptions {
    //  module width in pixels. Minimal value is 300. If the parameter is not set, widget will take all available width
    width?: number;
    // maximum height of the widget in pixels. Minimal value is 500. If 0, heigth is not limited. If widget content is 
    // larger than the maximum allowed, internal scrolling appears. By default — 0
    height?: number;
    //  number of comments on the page (5 - 100)
    limit?: number;
    // allows attachments in comments. String containing comma-separated types of acceptable attachments or false if 
    // media comments are disabled. Available types: graffiti, photo, audio, video, link. The value "*" allows all 
    // types. By default ­­­— "*"
    attach?: string;
    // automatically publish the comment to the user's VK page (0 — disabled, 1 — enabled). By default — 0
    autoPublish?: number;
    // enables the mini version of the widget — smaller fonts, smaller attachment thumbnails, smaller profile pictures 
    // in second level comments. (1 — enabled, 0 — disabled, auto — automatic selection depending on the available 
    // width). By default — auto
    mini?: string;
    // disables realtime updates for the comments. (1 — disabled,0 — enabled). By default — 0.
    norealtime?: number;
    // URL of the page, containing the widget. Comments that are automatically posted to the user's VK page link to 
    // this URL, if autoPublish is enabled
    pageUrl?: string;
}

interface IVKCommentsBrowseWidgetOptions {
    // module width in pixels. Minimal value is 300. If the parameter is not set, widget will take all available width
    width?: number;
    // maximum height of the widget in pixels. Minimal value is 500. If 0, heigth is not limited. If widget content is 
    // larger than the maximum allowed, internal scrolling appears. By default — 0
    height?: number;
    //  number of comments on the page (5 - 100)
    limit?: number;
    // enables the mini version of the widget — smaller fonts, smaller attachment thumbnails, smaller profile pcitures 
    // in second level comments. (1 — enabled, 0 — disabled, auto — automatic selection depending on the available 
    // width). By default — auto
    mini?: string;
    //  disables realtime updates for the comments. (1 — disabled,0 — enabled). By default — 0
    norealtime?: number;
}

interface IVKWidgets {
    Comments(elementId: string, options?: IVKCommentsWidgetOptions, pageId?: string): void;
    CommentsBrowse(elementId: string, options?: IVKCommentsBrowseWidgetOptions): void;
}

declare class VK {
    static Widgets: IVKWidgets;
}